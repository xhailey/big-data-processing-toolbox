# big-data-processing-toolbox

## Prerequisites

- docker is installed
- GCP CLI is installed
- kubectl is installed
- Helm chart is installed
- A GCP project is created
- GCP CLI is authenticated

      gcloud auth login

- The GCP project is set

       gcloud config set project PROJECT_ID


## Run the following instructions at the root of this repo

**Pull Docker Images from Docker Hub**

  UI App

    docker pull xxpan/big-data-app:latest

  Jupyter Notebook

    docker pull ibmcom/jupyter-base-notebook-ppc64le:latest
  
  Apache Spark

    docker pull bitnami/spark:latest

  Apache Hadoop (master and worker nodes)

    docker pull bde2020/hadoop-namenode:2.0.0-hadoop3.2.1-java8
    docker pull bde2020/hadoop-datanode:2.0.0-hadoop3.2.1-java8

  SonarQube

    docker pull sonarqube:latest

**Authenticate to the Google Container Registry**

    gcloud auth configure-docker

**Push Dokcer Images to GCR**

Replace $GCP_PROJECT_ID with your project ID below.

    docker tag xxpan/big-data-app:latest us.gcr.io/$GCP_PROJECT_ID/big-data-app:latest
    docker push us.gcr.io/$GCP_PROJECT_ID/big-data-app:latest

    docker tag ibmcom/jupyter-base-notebook-ppc64le:latest us.gcr.io/$GCP_PROJECT_ID/jupyter-notebook:latest
    docker push us.gcr.io/$GCP_PROJECT_ID/jupyter-notebook:latest

    docker tag bitnami/spark:latest us.gcr.io/$GCP_PROJECT_ID/spark:latest
    docker push us.gcr.io/$GCP_PROJECT_ID/spark:latest

    docker tag bde2020/hadoop-namenode:2.0.0-hadoop3.2.1-java8 us.gcr.io/$GCP_PROJECT_ID/namenode:latest
    docker push us.gcr.io/$GCP_PROJECT_ID/hadoop-master:latest

    docker tag bde2020/hadoop-datanode:2.0.0-hadoop3.2.1-java8 us.gcr.io/$GCP_PROJECT_ID/datanode:latest
    docker push us.gcr.io/$GCP_PROJECT_ID/hadoop-worker:latest

    docker tag sonarqube:latest us.gcr.io/$GCP_PROJECT_ID/sonarqube:latest
    docker push us.gcr.io/$GCP_PROJECT_ID/sonarqube:latest

**Create Kubernete cluster**

    gcloud container clusters create bigdatacluster --zone=us-east1-d --num-nodes=1 --machine-type=custom-4-12288 
    gcloud container clusters get-credentials bigdatacluster --zone=us-east1-d

**Check kubectl context**

  Check if your kubectl context is set to the cluster that you created in the previous step.

    kubectl config get-contexts 
  
  Otherwise, set the default context to the cluster name

    kubectl config use-context CLUSTER_NAME      

**Create Ingress Resource**

    helm install my-nginx stable/nginx-ingress  
    kubectl create -f Ingress/ingress.yaml

**Run Helm charts for each service**
  
  Change projectId in values to your project ID

    helm install jupyter-notebook helm/jupyter/

**Pahts to each services**
UI APP
/big-data-tools

Jupyter Notebook
/jupyter

/spark
/spark/worker

/hadoop
/datanoade

/sonarqube