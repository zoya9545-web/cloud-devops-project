pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/zoya9545-web/cloud-devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t clouddevops-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker stop clouddevops-container || true'
                sh 'docker rm clouddevops-container || true'
                sh 'docker run -d -p 3000:3000 --name clouddevops-container clouddevops-app'
            }
        }
    }
}
