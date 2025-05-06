FROM --platform=linux/amd64 debian:buster-slim
# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    xz-utils \
    libxrender1 \
    libxext6 \
    libfontconfig1 \
    libfreetype6 \
    libjpeg62-turbo \
    libpng16-16 \
    libssl1.1 \
    && apt-get clean
# Download and install wkhtmltopdf 0.12.5
RUN curl -LO https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.5/wkhtmltox_0.12.5-1.buster_amd64.deb && \
    apt install -y ./wkhtmltox_0.12.5-1.buster_amd64.deb && \
    rm wkhtmltox_0.12.5-1.buster_amd64.deb
# # Check if wkhtmltopdf is installed correctly
RUN which wkhtmltopdf && wkhtmltopdf --version
# Set wkhtmltopdf path
ENV PATH="/usr/local/bin:${PATH}"
# Entry point
ENTRYPOINT ["wkhtmltopdf"]
