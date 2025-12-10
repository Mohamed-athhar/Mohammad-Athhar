# EmailJS Integration Setup Guide

## Overview
Your contact form has been updated to use **EmailJS** for sending emails directly from your frontend. This guide walks you through the setup process.

---

## Step 1: Create an EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

---

## Step 2: Get Your Public Key

1. Log in to your EmailJS dashboard
2. Go to **Account** section (top right)
3. Copy your **Public Key**
4. In `script.js`, replace `"YOUR_PUBLIC_KEY"` with your actual public key:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Example:
```javascript
emailjs.init("abc123xyz456xyz789");
```

---

## Step 3: Add an Email Service

### Option A: Using Gmail

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Click **Connect Account**
5. Log in with your Gmail account
6. Allow EmailJS to access your Gmail
7. Copy the **Service ID** (e.g., `service_abc123xyz`)

### Option B: Using SMTP or Other Services

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Select your email provider (Outlook, Yahoo, custom SMTP, etc.)
4. Follow the on-screen instructions
5. Copy the **Service ID**

---

## Step 4: Create an Email Template

1. In EmailJS Dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Name your template (e.g., "Contact Form")
4. Copy the **Template ID** (e.g., `template_abc123xyz`)

### Template Setup Example

Set your email template to include these variables that match your form:

**Email Subject:**
```
New Contact Form Submission: {{subject}}
```

**Email Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

**Recipient Email (To Email):**
```
{{to_email}}
```

---

## Step 5: Update Your script.js

In `script.js`, find the `handleFormSubmit()` function and replace:
- `"YOUR_SERVICE_ID"` with your Service ID
- `"YOUR_TEMPLATE_ID"` with your Template ID

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
```

Example:
```javascript
emailjs.send("service_abc123xyz", "template_xyz789abc", templateParams)
```

---

## Step 6: Update Your Recipient Email (Optional)

In `script.js`, the recipient email is currently set to:
```javascript
to_email: "mhdathhar22@gmail.com"
```

If you want to change where the form submissions are received, update this email address.

---

## Testing Your Form

1. Open your website in a browser
2. Scroll to the **Contact** section
3. Fill in all fields:
   - **Name**: Your name
   - **Email**: Your email address
   - **Subject**: Test subject
   - **Message**: Test message
4. Click **Send Message**
5. You should see: **"Message sent successfully!"**
6. Check your inbox for the email

---

## Form Validation

The form validates:
- ✅ All fields are filled out
- ✅ Email format is valid
- ✅ No empty or whitespace-only fields

If validation fails, you'll see: **"Please fill in all fields correctly."**

---

## Error Messages

**"Failed to send message. Try again."**
- This occurs when EmailJS fails to send
- Check your browser's console (F12 → Console) for detailed error messages
- Common causes:
  - Invalid Service ID
  - Invalid Template ID
  - EmailJS quota exceeded
  - Network issues

---

## Free Tier Limits

EmailJS free account includes:
- **200 emails per month**
- Unlimited templates
- Unlimited services

---

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/help/)
- Check your browser console (F12) for error messages

---

## Files Updated

- **index.html**: Added EmailJS library, subject field, and form handler
- **script.js**: Added EmailJS integration with validation and error handling

