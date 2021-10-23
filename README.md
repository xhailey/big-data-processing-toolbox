# big-data-processing-toolbox

## Prerequisites

- docker is installed
- GCP CLI is installed
- kubectl is installed
- Helm chart is installed

## Run the following instructions at the root of this repo

**Run UI Application**

    docker build -t big-data-app:latest . -f docker/ui-app/Dockerfile
    docker run -p 3000:4000 big-data-app:latest

**Build Docker Images**

Jupyter Notebook

    docker build -t jupyter-notebook:latest . -f docker/juptyter/Dockerfile
    docker run -p 8000:8888 jupyter-notebook:latest

Apache Hadoop

    docker build

Apache Spark

    docker build -t apache-spark:latest . -f docker/spark/Dockerfile
    docker run -p 8080:8080 apache-spark:latest

SonarQube and SonarScanner

    docker build

**Push Docker Images to GCR**

    docker push

**Create GCP create cluster**

    gcp

**Run helm charts**

    helm install