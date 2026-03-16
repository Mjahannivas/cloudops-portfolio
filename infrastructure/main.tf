variable "region" {
  default = "us-east-1"
}

provider "aws" {
  region = var.region
}

# 1. Create ECR Repository
resource "aws_ecr_repository" "portfolio_repo" {
  name                 = "portfolio-app"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

# 2. EKS Cluster
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "portfolio-cluster"
  cluster_version = "1.29"

  vpc_id                   = "vpc-12345678" # Replace with your VPC ID
  subnet_ids               = ["subnet-abcde012", "subnet-bcde012a"] # Replace with your Subnet IDs

  eks_managed_node_groups = {
    portfolio_nodes = {
      min_size     = 1
      max_size     = 3
      desired_size = 2
      instance_types = ["t3.medium"]
    }
  }
}
