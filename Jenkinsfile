pipeline {
    agent any
    
    tools {
        nodejs 'nodejs18'
    }
    
    environment {
        DOCKER_IMAGE = "yourdockerhubusername/tracker"
        DOCKER_TAG = "${BUILD_NUMBER}"
        SCANNER_HOME = tool 'SonarQube Scanner'
    }
    
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sk292004/tracker.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        ${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey=tracker \
                        -Dsonar.projectName=tracker \
                        -Dsonar.sources=. \
                        -Dsonar.exclusions=node_modules/**,build/**,.next/**
                    '''
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                }
            }
        }
        
        stage('Trivy Image Scan') {
            steps {
                sh "trivy image --severity HIGH,CRITICAL ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
        
        stage('Deploy Application') {
            steps {
                script {
                    // Stop and remove old container if exists
                    sh '''
                        docker stop tracker-app || true
                        docker rm tracker-app || true
                    '''
                    
                    // Run new container
                    sh "docker run -d --name tracker-app -p 3000:3000 ${DOCKER_IMAGE}:latest"
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
