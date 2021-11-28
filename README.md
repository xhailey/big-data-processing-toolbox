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

  Namenode

    https://hub.docker.com/r/bde2020/hadoop-namenode
    docker pull bde2020/hadoop-namenode:2.0.0-hadoop3.2.1-java8

  Datanode

    https://hub.docker.com/r/bde2020/hadoop-datanode
    docker pull bde2020/hadoop-datanode:2.0.0-hadoop3.2.1-java8

  SonarQube

    https://hub.docker.com/_/sonarqube
    docker pull sonarqube:latest

## Prerequisites
- Install Docker
- Install GCP CLI
- Install kubectl
- Install Helm 

    https://helm.sh/docs/using_helm/#installing-helm
- Create GCP project
- Authenticate GCP CLI

      gcloud auth login

- Set GCP project

       gcloud config set project PROJECT_ID

## Get Ready
**Create Kubernete cluster**

    gcloud container clusters create bigdatacluster --zone=us-east1-d --num-nodes=1 --machine-type=custom-4-12288 
    gcloud container clusters get-credentials bigdatacluster --zone=us-east1-d

**Check kubectl context**

  Check if your kubectl context is set to the cluster that you created in the previous step.

    kubectl config get-contexts 
  
  Otherwise, set the default context to the cluster name

    kubectl config use-context CLUSTER_NAME    

## Install Helm charts for each service. Run the following instructions at the root of this repo  

<span style="color:blue">**Deploy Jupyter Notebook**</span>

    helm install jupyter helm/jupyter/

<span style="color:blue">**Deploy Sonarqube**</span>

    helm install sonarqube helm/sonarqube

<span style="color:blue">**Deploy Spark**</span>

Step 1 - Install master 

      helm install spark-master helm/spark/master
      
Step 2 - Install worker
      
Use the following command to find the external IP address of the `spark-service`.

    kubectl get service spark-service

![master pod name](./png/spark-master-ip.png)


Replace the IP address at line 7 in `helm/spark/worker/configMap.yaml` with `spark-service`'s IP address.

![worker config](./png/spark-worker-config.png)

Lastly, run the following to deploy worker

    helm install spark-worker helm/spark/worker

<span style="color:blue">**Deploy Hadoop**</span>

Step 1 - Install namenode

    helm install hadoop-namenode helm/hadoop/namenode

Step 2 - Install datanode

    helm install hadoop-datanode helm/hadoop/datanode

<span style="color:blue">**Deploy Driver UI Application**</span>

Step 1 - Find the external IP addresses and port for the following services, `namenode-ui`, `sonarqube-service`, `jupyter-service`, `spark-service`.

    kubectl get svc jupyter-service namenode-ui sonarqube-service spark-service

![service list](./png/ui-service-list.png)

Step 2 - Replace the IP addresses from Line 2-5 in `big-data-processing-toolbox-app/src/config.js` with the IP adderss and port that you found in the previous step. Follow the comments in the file. **Note that namenode services has the port number 9870.** 

![service url](./png/ui-app-config.png)

Step 3 - Build the UI App Image

    docker build -t big-data-app:latest . -f docker/ui-app/Dockerfile

Step 4 - Push the image to a repo at your choice

    docker tag big-data-app:latest YOUR_REPO_NAME/big-data-app:latest

    docker push YOUR_REPO_NAME/big-data-app:latest

Step 5 - Set the image url at Line 19 in `helm\ui-app\deployment.yaml`

![set ui app image url](./png/set-ui-app-image-url.png)

Step 6 - Deploy the UI app

    helm install ui-app helm/ui-app

**This UI app deploymen takes awhile due to the application build time. Grab a coffee and come back to check the UI app.**	&#128516;

You can monitor the application start status by `kubectl logs ui-app-0`, the application is ready when you see the following.

![ui app ready](./png/ui-app-ready.png)

## Nevigate to the UI app
 
Find the external IP of the `ui-app-service`.

      kubectl get service ui-app-service  

![ui app ip](./png/ui-app-ip.png)
  
Nevigate to the IP address in the browser to see the UI app. Click on each link to neviagea to different microservices.

![ui app](./png/ui-app.png)

