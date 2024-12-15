# backend.py
from flask import Flask, request, jsonify
from google.cloud import vision_v1, storage, bigquery
import io
import os

app = Flask(__name__)
vision_client = vision_v1.ImageAnnotatorClient()
storage_client = storage.Client()
big_query_client = bigquery.Client()

# Replace with your actual bucket name
BUCKET_NAME = 'green_sphere_ai_bucket'

# Set the path to the service account key file 
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/home/kailasamsiva/green-sphere-ai/keys/green-sphere-ai-firebase-admin.json'

ECO_FRIENDLY_LABELS = [ 'earth', 'green', 'water', 'sky', 'leaf', 'recyclable', 'biodegradable', 'compostable', 'organic', 'sustainable', 'renewable', 'eco-friendly', 'green product', 'environmentally friendly', 'non-toxic', 'natural', 'reusable', 'fair trade', 'ethically sourced', 'carbon neutral', 'energy efficient', 'low carbon footprint', 'water-saving', 'solar-powered', 'wind energy', 'zero waste', 'vegan', 'cruelty-free', 'plant-based', 'eco packaging', 'low emission', 'responsible consumption', 'minimalist design', 'low waste', 'organic cotton', 'sustainable forestry', 'renewable energy', 'green building', 'energy star', 'LEED certified', 'Forest Stewardship Council (FSC) certified', 'Marine Stewardship Council (MSC) certified', 'Rainforest Alliance certified', 'B Corporation certified', 'Cradle to Cradle certified', 'EcoCert', 'Green Seal', 'Global Organic Textile Standard (GOTS)', 'USDA organic', 'EWG verified', 'plastic-free', 'zero carbon', 'reduced packaging', 'local production', 'upcycled', 'downcycled', 'circular economy', 'clean energy', 'sustainable agriculture', 'organic farming', 'ethical fashion', 'refill stations', 'bulk shopping', 'repairable', 'secondhand', 'carbon offset', 'ecolabel', 'green chemistry', 'green technology', 'green innovations', 'low impact', 'greener choice', 'green alternatives', 'sustainable development', 'environmental responsibility' ]

@app.route('/api/v1/images', methods=['POST'])
def process_image():
    try:
        image = request.files['image']
        content = image.read()
        blob = storage_client.bucket(BUCKET_NAME).blob(image.filename)
        blob.upload_from_string(content, content_type=image.content_type)

        vision_image = vision_v1.Image(content=content)
        response = vision_client.label_detection(image=vision_image)
        labels = response.label_annotations
        label_descriptions = [label.description.lower() for label in labels]

        eco_friendly = any(label in label_descriptions for label in ECO_FRIENDLY_LABELS)
        result = "Eco-friendly" if eco_friendly else "Not eco-friendly"

        return jsonify({'result': result, 'labels': label_descriptions})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/v1/bigquery', methods=['GET'])
def get_bigquery_data():
    query = """
        SELECT *
        FROM `green-sphere-ai.green_sphere_dataset.continent_consumption_twh`
        LIMIT 10
    """
    query_job = big_query_client.query(query)
    results = query_job.result()
    data = [dict(row) for row in results]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

