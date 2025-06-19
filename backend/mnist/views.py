import torch
import torch.nn.functional as F
import torch.nn as nn
from typing import List
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.conf import settings
import os
import base64
from PIL import Image
import io
import numpy as np
from django.conf import settings


from torchModels.torchModels import MLPClassifier, LRClassifier, CNNClassifier

def load_models():
    mlp = MLPClassifier()
    lr = LRClassifier()
    cnn = CNNClassifier()

    base_path = os.path.join(settings.BASE_DIR, 'torchModels', 'models')
    mlp_path = os.path.join(base_path, 'mlp.pth')
    lr_path = os.path.join(base_path, 'lr.pth')
    cnn_path = os.path.join(base_path, 'cnn.pth')

# Create your views here.


