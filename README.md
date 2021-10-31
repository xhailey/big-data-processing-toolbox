# big-data-processing-toolbox

## Images on Docker Hub
  UI App

   https://hub.docker.com/repository/docker/xxpan/big-data-app

  Jupyter Notebook

    https://hub.docker.com/r/jupyter/datascience-notebook
    docker pull jupyter/datascience-notebook:latest

  Apache Spark

    https://hub.docker.com/r/bitnami/spark  
    docker pull bitnami/spark:latest

  Apache Hadoop (master and worker nodes)

    https://hub.docker.com/r/bde2020/hadoop-namenode
    docker pull bde2020/hadoop-namenode:2.0.0-hadoop3.2.1-java8

    https://hub.docker.com/r/bde2020/hadoop-datanode
    docker pull bde2020/hadoop-datanode:2.0.0-hadoop3.2.1-java8

  SonarQube

    https://hub.docker.com/_/sonarqube
    docker pull sonarqube:latest

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

  Just in case you want to delete the ingress,

        kubectl delete -f Ingress/ingress.yaml

**Install Helm charts for each service**
  
  Update `$GCP_PROJECT_ID` in values.yaml in each folder in the helm directory
  
  Deploy UI app

    helm install ui-app helm/ui-app

  Deploy Jupyter Notebook

    helm install jupyter helm/jupyter/

  Deploy Sonarqube

    helm install sonarqube helm/sonarqube

  Deploy Spark

    1. helm install spark helm/spark
    2. find and enter the pod
   
  Deploy Hadoop

    helm install hadoop helm/hadoop

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