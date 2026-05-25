pipeline {
    agent any

    environment {
        IMAGE_NAME = "zoya9545/clouddevops-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                credentialsId: 'github-creds',
                url: 'https://github.com/zoya9545-web/cloud-devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop clouddevops-container || true'
                sh 'docker rm clouddevops-container || true'
                sh 'docker run -d -p 3000:3000 --name clouddevops-container $IMAGE_NAME'
            }
        }
    }
}
