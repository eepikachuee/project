from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer

@api_view(['POST'])
def submit_form(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Form submitted successfully"})
    return Response({"message": "Invalid data", "errors": serializer.errors}, status=400)
