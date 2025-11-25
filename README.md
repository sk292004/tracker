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


