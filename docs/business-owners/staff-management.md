---
sidebar_position: 5
title: Staff Management
---

# Staff Management

Payverge's staff management system allows you to invite team members and assign role-based permissions. This guide covers inviting staff, managing roles, and controlling access.

## Overview

Staff members help you run your business without needing crypto wallets or blockchain knowledge. They authenticate using email and one-time codes, making it simple for anyone to use.

---

## Accessing Staff Management

1. Log into your Business Dashboard
2. Click **"Staff"** in the sidebar
3. View your team and pending invitations

TODO: ADD IMAGE - Screenshot of staff management interface

---

## Staff Roles

Payverge offers four staff roles with different permission levels.

### Manager

**Full operational access** - Can manage everything except financial settings.

**Permissions:**
- ✅ Menu management (create, edit, delete items)
- ✅ Table management (create, edit, delete tables)
- ✅ Staff management (invite and manage team)
- ✅ Bill management (create, view, close bills)
- ✅ Order management (approve, reject, track)
- ✅ Kitchen display access
- ✅ Analytics and reports
- ❌ Subscription management
- ❌ Payment settings
- ❌ Financial settings

**Best For:**
- Restaurant managers
- Shift supervisors
- Assistant managers
- Operations managers

---

### Server

**Table and bill management** - Focused on customer service.

**Permissions:**
- ✅ View tables and status
- ✅ Create bills for customers
- ✅ Add items to bills
- ✅ Process payments
- ✅ Close bills
- ✅ View order status
- ❌ Menu editing
- ❌ Staff management
- ❌ Analytics access
- ❌ Table creation/deletion

**Best For:**
- Waiters and waitresses
- Front-of-house staff
- Service staff
- Floor managers

---

### Host

**Table and seating management** - Focused on guest reception.

**Permissions:**
- ✅ View all tables
- ✅ See table status (occupied, available)
- ✅ View active bills
- ✅ See guest count
- ❌ Create or edit bills
- ❌ Menu management
- ❌ Order management
- ❌ Staff management

**Best For:**
- Hosts and hostesses
- Greeters
- Reservation managers
- Front desk staff

---

### Kitchen

**Order viewing only** - Focused on food preparation.

**Permissions:**
- ✅ Access kitchen display system
- ✅ View incoming orders
- ✅ Mark items as "In Kitchen"
- ✅ Mark items as "Ready"
- ✅ See order details and special requests
- ❌ All other features restricted

**Best For:**
- Chefs
- Cooks
- Kitchen staff
- Prep staff

---

## Role Comparison Table

| Feature | Owner | Manager | Server | Host | Kitchen |
|---------|-------|---------|--------|------|---------|
| **Menu Management** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Create Tables** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **View Tables** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Create Bills** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Close Bills** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Approve Orders** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Kitchen Display** | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Staff Management** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Analytics** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Financial Settings** | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## Inviting Staff Members

### Sending Invitations

1. Click **"Invite Staff"** button
2. Fill in invitation details:
   - **Email Address:** Staff member's email
   - **Role:** Select from Manager, Server, Host, or Kitchen
   - **Name:** Staff member's name (optional)
3. Click **"Send Invitation"**

TODO: ADD IMAGE - Screenshot of staff invitation form

### What Happens Next

**Invitation Email Sent:**
- Staff receives email with invitation link
- Email includes business name and role
- Link expires in 7 days
- Can resend if expired

**Staff Accepts:**
1. Clicks invitation link
2. Enters their name
3. Confirms acceptance
4. Receives login credentials via email

**Staff Can Login:**
- Uses email address
- Receives 6-digit verification code
- Enters code to access dashboard
- No crypto wallet needed!

TODO: ADD IMAGE - Screenshot of invitation email example

---

## Managing Active Staff

### Viewing Staff List

Your staff list shows:
- **Name** - Staff member's name
- **Email** - Contact email
- **Role** - Current role assignment
- **Status** - Active or Pending
- **Last Login** - Most recent access
- **Actions** - Edit or remove

TODO: ADD IMAGE - Screenshot of active staff list

### Editing Staff Roles

Change a staff member's role:

1. Find staff member in list
2. Click **edit icon** (✏️)
3. Select new role
4. Click **"Save Changes"**
5. Staff member's permissions update immediately

**When to Change Roles:**
- Promotion (Server → Manager)
- Department change (Server → Host)
- Temporary coverage (Host → Server)
- Demotion (if necessary)

---

## Removing Staff Access

### Deactivating Staff

Remove a staff member's access:

1. Find staff member in list
2. Click **remove icon** (🗑️)
3. Confirm removal
4. Staff access revoked immediately

**What Happens:**
- Staff can no longer log in
- Active sessions terminated
- Email notification sent
- History preserved for records

:::warning Important
Removed staff cannot access the system but their historical data (bills created, orders processed) remains for audit purposes.
:::

---

## Pending Invitations

### Managing Invitations

View all pending invitations:
- **Email** - Invited email address
- **Role** - Assigned role
- **Sent Date** - When invitation was sent
- **Expires** - Expiration date (7 days)
- **Actions** - Resend or cancel

TODO: ADD IMAGE - Screenshot of pending invitations list

### Resending Invitations

If staff didn't receive or lost the email:

1. Find invitation in pending list
2. Click **"Resend"**
3. New email sent with fresh link
4. Previous link invalidated

### Canceling Invitations

Cancel an invitation before it's accepted:

1. Find invitation in pending list
2. Click **"Cancel"**
3. Confirm cancellation
4. Invitation link becomes invalid

---

## Staff Authentication

### How Staff Login

**No Crypto Wallet Required!**

1. Visit staff login page
2. Enter email address
3. Receive 6-digit code via email
4. Enter code to access dashboard
5. Session lasts 24 hours

TODO: ADD IMAGE - Screenshot of staff login flow

### Security Features

**One-Time Codes:**
- New code for each login
- Expires in 10 minutes
- Cannot be reused
- Sent via secure email

**Session Management:**
- 24-hour sessions
- Auto-logout after inactivity
- Secure token-based authentication
- No passwords to remember

---

## Staff Workflows

### Server Workflow

**Typical Day:**
1. Login via email code
2. View assigned tables
3. Create bills for customers
4. Add items as guests order
5. Process payments
6. Close bills
7. Repeat for next table

**Quick Actions:**
- Create new bill
- Add items to existing bill
- Mark bill as paid
- Close completed bills

---

### Manager Workflow

**Typical Day:**
1. Login via email code
2. Review daily operations
3. Approve pending orders
4. Monitor kitchen status
5. Check analytics
6. Manage staff if needed
7. Handle special requests

**Quick Actions:**
- Approve/reject orders
- View analytics
- Invite new staff
- Edit menu items

---

### Host Workflow

**Typical Day:**
1. Login via email code
2. View table availability
3. Monitor table status
4. Track guest flow
5. Coordinate with servers
6. Manage waiting list

**Quick Actions:**
- View all tables
- Check table status
- See active bills
- Monitor occupancy

---

### Kitchen Workflow

**Typical Day:**
1. Login via email code
2. Access kitchen display
3. View incoming orders
4. Mark items "In Kitchen"
5. Prepare dishes
6. Mark items "Ready"
7. Notify servers

**Quick Actions:**
- View order queue
- Mark items in progress
- Mark items ready
- See special requests

---

## Staff Performance Tracking

### Available Metrics

**For Managers:**
- Bills created per staff member
- Average bill value by server
- Order processing time
- Customer satisfaction (if tracked)

**For Servers:**
- Personal bill count
- Total sales
- Average tip percentage
- Bills per shift

TODO: ADD IMAGE - Screenshot of staff performance dashboard

---

## Best Practices

### Inviting Staff

**Do:**
- ✅ Use work email addresses
- ✅ Assign appropriate roles
- ✅ Provide training on first day
- ✅ Test access before shift

**Don't:**
- ❌ Share owner credentials
- ❌ Give excessive permissions
- ❌ Forget to remove departed staff
- ❌ Use personal emails for work

### Role Assignment

**Guidelines:**
- Start with minimal permissions
- Increase access as needed
- Review roles quarterly
- Adjust for seasonal staff

### Security

**Best Practices:**
- Remove access immediately when staff leaves
- Regularly review active staff list
- Monitor for unusual activity
- Use work emails only
- Train staff on security

---

## Troubleshooting

### Staff Can't Receive Invitation

**Check:**
- Email address is correct
- Check spam/junk folder
- Email service is working
- Invitation hasn't expired

**Solution:**
- Verify email address
- Resend invitation
- Try different email
- Contact support if persistent

### Staff Can't Login

**Check:**
- Using correct email address
- Checking email for code
- Code hasn't expired (10 min)
- Account is still active

**Solution:**
- Request new code
- Check spam folder
- Verify account status
- Contact manager/owner

### Wrong Permissions

**Check:**
- Role assignment is correct
- Subscription tier supports feature
- Feature is enabled
- No system issues

**Solution:**
- Verify role in staff list
- Change role if needed
- Check subscription status
- Contact support

---

## Staff Training

### Onboarding Checklist

**Day 1:**
- [ ] Send invitation
- [ ] Verify email received
- [ ] Guide through acceptance
- [ ] Test login process
- [ ] Show dashboard overview

**Week 1:**
- [ ] Train on specific role tasks
- [ ] Practice common workflows
- [ ] Review best practices
- [ ] Answer questions
- [ ] Monitor performance

**Ongoing:**
- [ ] Regular check-ins
- [ ] Address issues promptly
- [ ] Provide feedback
- [ ] Update training as needed

### Training Resources

**For Staff:**
- Role-specific guides
- Video tutorials
- Quick reference cards
- FAQ document

**For Managers:**
- Staff management guide
- Training materials
- Performance tracking
- Issue resolution

---

## Advanced Features

### Shift Management

Coming soon:
- Assign staff to shifts
- Track hours worked
- Shift handoff notes
- Schedule management

### Staff Messaging

Coming soon:
- Internal messaging
- Shift announcements
- Task assignments
- Team communication

### Performance Reviews

Coming soon:
- Automated performance reports
- Goal tracking
- Feedback system
- Recognition program

---

## Next Steps

Now that you understand staff management:

- **[Dashboard Overview](/business-owners/dashboard)** - Navigate your dashboard
- **[Menu Builder](/business-owners/menu-builder)** - Manage your menu
- **[Bill Management](/business-owners/bills)** - Handle customer payments

---

**Need help?** Contact support@payverge.io
