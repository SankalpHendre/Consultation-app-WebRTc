import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'medical_consultation.settings')
django.setup()

from django.contrib.auth.models import User
from consultation.models import UserProfile, Meeting, Clinic
from django.utils import timezone
from datetime import timedelta

def create_user(username, role, first_name, last_name, email):
    user, created = User.objects.get_or_create(username=username, email=email)
    if created:
        user.set_password('password123')
        user.first_name = first_name
        user.last_name = last_name
        user.save()
    
    profile, p_created = UserProfile.objects.get_or_create(user=user)
    profile.role = role
    profile.mobile = '+910000000000'
    profile.sex = 'M' if 'doctor' in username or 'sales' in username or 'admin' in username else 'F'
    profile.save()
    return user

print("Creating clinic...")
clinic, c_created = Clinic.objects.get_or_create(clinic_id='C1', defaults={'name': 'Main Clinic'})

print("Creating test users...")
doc = create_user('doctor1', 'doctor', 'John', 'Doe', 'doctor@test.com')
pat = create_user('patient1', 'patient', 'Jane', 'Smith', 'patient@test.com')
sal = create_user('sales1', 'sales', 'Mike', 'Sales', 'sales@test.com')
adm = create_user('admin1', 'admin', 'Admin', 'User', 'admin@test.com')

print("Creating sample meeting...")
meeting, m_created = Meeting.objects.get_or_create(
    room_id='TEST_ROOM',
    defaults={
        'patient': pat,
        'doctor': doc,
        'sales': sal,
        'clinic': clinic,
        'scheduled_time': timezone.now() + timedelta(hours=1),
        'duration': 30,
        'status': 'scheduled',
        'appointment_type': 'consultation',
        'department': 'General',
        'remark': 'Test integration',
        'appointment_reason': 'Routine Checkup'
    }
)

print("Test data setup complete.")
print(f"Room ID: {meeting.room_id}")
print(f"Meeting PK: {meeting.meeting_id}")
print(f"Guest URL: http://localhost:3000/room/{meeting.room_id}?meeting_id={meeting.meeting_id}")
print(f"Doctor Login: doctor1 / password123")
print(f"Patient Login: patient1 / password123")
