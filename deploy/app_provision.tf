provider "aws" {
  profile = "default"
  region  = var.region
}

resource "aws_s3_bucket" "recipehub_website_bucket" {
  bucket = "recipehub-website"
  acl    = "public-read" # does this need to be public since the policy is public?
  policy = file("${path.module}/app_s3policy.json")
  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

output "recipehub_website_bucket_id" {
  value = aws_s3_bucket.recipehub_website_bucket.id
}

