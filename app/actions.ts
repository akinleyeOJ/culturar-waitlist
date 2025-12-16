'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  const origin = formData.get('origin') as string;
  const location = formData.get('location') as string;
  const userType = formData.get('userType') as string;
  const customOrigin = formData.get('custom_origin') as string;
  const customLocation = formData.get('custom_location') as string;

  const finalOrigin = origin === 'Other' ? customOrigin : origin;
  const finalLocation = location === 'Other' ? customLocation : location;

  if (!email || !origin || !location) {
    return { success: false, error: 'Missing required fields' };
  }

  try {
    // 1. Try to add user to Resend Audience (Optional)
    try {
      await resend.contacts.create({
        email: email,
        firstName: '',
        unsubscribed: false,
        // audienceId: '...' // Removed based on your dashboard snippet
      });
      console.log('✅ Added to Resend Contacts');
    } catch (contactError) {
      console.warn('⚠️ Could not add to contacts (continuing anyway):', contactError);
      // We continue execution so you still get the email notification
    }

    // 2. Send notification to YOU (Admin)
    console.log('Attempting to send email notification...');
    const emailResult = await resend.emails.send({
      from: 'Culturar Waitlist <onboarding@resend.dev>',
      to: 'akinleyeoj@gmail.com', // Updated to your verified account email
      replyTo: email, // Lets you reply directly to the interested user
      subject: `🚀 New ${userType} Sign-up!`,
      text: `New user details:\n\nType: ${userType}\nEmail: ${email}\nFrom: ${finalOrigin}\nLocation: ${finalLocation}`,
    });

    console.log('✅ Email sent successfully:', emailResult);
    return { success: true };
  } catch (error) {
    console.error('❌ Waitlist error:', error);
    return { success: false, error: 'Failed to join waitlist' };
  }
}