# big-data-processing-toolbox

## Prerequisites

- docker is installed on your local machine
- GCP CLI is installed
- kubectl is installed
- Helm chart is installed

## Run the following instructions at the root of this repo

**Run UI Application**

    docker build -t big-data-app:latest . -f docker/ui-app/.
    docker run -p 3000:4000 big-data-app:latest

**Build Docker Images**

Jupyter Notebook

    docker build

**Push Docker Images to GCR**

    docker push

**Create GCP create cluster**

    gcp

**Run helm charts**

    helm install