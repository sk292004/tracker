# 🚀 Next.js Tracker App with Automated CI/CD Pipeline

A Next.js application deployed to **AWS EC2** using a fully automated **GitLab CI/CD** pipeline. The infrastructure includes **Docker** containerization, **S3** for storage, and integrated security scanning with **SonarCloud** and **OWASP ZAP**.

## 📋 Table of Contents
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Local Run](#-installation--local-run)
- [Deployment Pipeline (CI/CD)](#-deployment-pipeline-cicd)
- [AWS Infrastructure Setup](#-aws-infrastructure-setup)
- [Configuration](#-configuration)

## 🏗 Architecture

The pipeline follows a DevSecOps approach:
1.  **Code Commit**: Developer pushes code to GitLab.
2.  **Build Stage**: Docker image is built and pushed to GitLab Container Registry.
3.  **Test Stage**: Code quality analysis via **SonarCloud**.
4.  **Deploy Stage**: Docker container is pulled and run on AWS EC2 via SSH.
5.  **Security Stage**: Live DAST security scan using **OWASP ZAP**.
6.  **Storage**: Application stores user data in **AWS S3** via IAM Roles.

## 🛠 Tech Stack

*   **Framework:** Next.js 14 (Node.js)
*   **Containerization:** Docker
*   **Cloud Provider:** AWS (EC2, S3, IAM)
*   **CI/CD:** GitLab CI
*   **Code Quality:** SonarCloud
*   **Security:** OWASP ZAP (Baseline Scan)
*   **OS:** Ubuntu 22.04 LTS

## 💻 Installation & Local Run

To run this application on your local machine:

1. Clone the repository
git clone <YOUR_REPO_URL>

2. Install dependencies
npm install

3. Run the development server
npm run dev

text

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deployment Pipeline (CI/CD)

The `.gitlab-ci.yml` file defines four stages:

1.  **Build**:
    *   Builds the Docker image using the multi-stage `Dockerfile`.
    *   Pushes the image to the GitLab Container Registry.
2.  **Test (SonarQube)**:
    *   Scans the source code for bugs, vulnerabilities, and code smells.
    *   Uploads report to SonarCloud dashboard.
3.  **Deploy**:
    *   SSHs into the AWS EC2 instance.
    *   Pulls the latest Docker image.
    *   Restarts the container to apply changes.
4.  **Security (OWASP ZAP)**:
    *   Performs a baseline penetration test against the running EC2 instance.
    *   Generates a security report artifact.

## ☁️ AWS Infrastructure Setup

This project uses a manual "Click-Ops" setup for simplicity.

### 1. EC2 Instance
*   **OS**: Ubuntu 22.04 LTS
*   **Type**: t2.micro
*   **Security Group**:
    *   Port `22` (SSH) - Open to world (or restricted to GitLab IPs).
    *   Port `3000` (App) - Open to world.
*   **User Data Script**: Installs Docker automatically on boot.

### 2. S3 Bucket
*   **Purpose**: Stores file uploads/application data.
*   **Access**: Managed via IAM Role (No hardcoded keys).

### 3. IAM Role
*   **Role Name**: `EC2-S3-Access-Role`
*   **Policy**: `AmazonS3FullAccess`
*   **Attachment**: Attached to the EC2 instance to allow password-less S3 access.

## ⚙️ Configuration

The following **CI/CD Variables** must be set in GitLab (Settings -> CI/CD -> Variables):

| Variable | Description |
| :--- | :--- |
| `EC2_IP_ADDRESS` | Public IP of the AWS EC2 instance. |
| `SSH_PRIVATE_KEY` | The `.pem` file content for SSH access. |
| `SONAR_TOKEN` | Access token from SonarCloud. |
| `SONAR_HOST_URL` | `https://sonarcloud.io` |
| `SONAR_PROJECT_KEY`| Project Key from SonarCloud. |
| `SONAR_ORG_KEY` | Organization Key from SonarCloud. |



