---
sidebar_position: 3
title: Table Management
---

# Table Management

Tables are the foundation of your Payverge setup. Each table gets a unique QR code that guests scan to access your menu. This guide covers everything about creating and managing tables.

## What are Tables?

In Payverge, a "table" represents any location where guests can access your menu:

- **Restaurant Tables** - Physical dining tables
- **Counter Seats** - Bar or counter seating
- **Takeout Counter** - Pickup locations
- **Room Numbers** - Hotel room service
- **Delivery Zones** - Outdoor seating areas

Each table gets a unique QR code and tracking URL.

---

## Accessing Table Management

1. Log into your Business Dashboard
2. Click **"Tables"** in the sidebar
3. View all your tables and their status

TODO: ADD IMAGE - Screenshot of table management interface

---

## Creating Tables

### Adding a Single Table

1. Click **"Add Table"** button
2. Enter table information:
   - **Table Name/Number:** e.g., "Table 1", "Counter A"
   - **Area/Section:** Optional (e.g., "Patio", "Main Dining")
   - **Capacity:** Number of seats (optional)
   - **Status:** Active or Inactive
3. Click **"Create Table"**

TODO: ADD IMAGE - Screenshot of add table form

### Table Naming Best Practices

**Good Names:**
- Table 1, Table 2, Table 3...
- A1, A2, B1, B2 (for sections)
- Patio-1, Patio-2
- Counter-A, Counter-B
- Bar-1, Bar-2

**Tips:**
- Use consistent naming scheme
- Include section/area for large venues
- Keep names short and clear
- Use numbers or letters for easy reference

---

## QR Codes

Each table automatically gets a unique QR code that guests scan to access your menu.

### Viewing QR Codes

1. Find the table in your table list
2. Click **"View QR Code"** or the QR icon
3. See the QR code and table URL

TODO: ADD IMAGE - Screenshot of QR code display modal

### QR Code Information

Each QR code includes:
- **Visual QR Code** - The scannable code
- **Table URL** - Direct link (e.g., `payverge.io/t/abc123`)
- **Table Name** - For your reference
- **Status** - Active or Inactive

---

## Downloading QR Codes

You need to print QR codes and place them at each table location.

### Download Options

1. Click **"Download QR Code"**
2. Choose format:
   - **PNG** - Standard image format
   - **SVG** - Vector format (scales perfectly)
   - **PDF** - Ready to print

3. Select size:
   - **Small** - 2x2 inches (business card size)
   - **Medium** - 4x4 inches (table tent)
   - **Large** - 8x8 inches (poster)

TODO: ADD IMAGE - Screenshot of download options

### Printing Tips

**For Table Tents:**
- Use medium size (4x4 inches)
- Print on cardstock
- Laminate for durability
- Fold into standing tent

**For Table Stickers:**
- Use small size (2x2 inches)
- Print on waterproof sticker paper
- Apply directly to table surface
- Clean surface before applying

**For Posters:**
- Use large size (8x8 inches)
- Frame and mount on wall
- Great for counter service
- Include instructions: "Scan to Order"

TODO: ADD IMAGE - Photos of different QR code display methods (table tent, sticker, poster)

---

## Table Status

Control which tables are available to guests.

### Active Tables
- ✅ QR code works when scanned
- Guests can access menu and order
- Appears in your active tables list
- Default status for new tables

### Inactive Tables
- ❌ QR code shows "Table Not Available"
- Guests cannot access menu
- Useful for closed sections or maintenance
- Table data preserved

### Toggling Status

**Quick Toggle:**
1. Find table in list
2. Click the status toggle switch
3. Status changes immediately

**Bulk Toggle:**
1. Select multiple tables (checkboxes)
2. Click **"Bulk Actions"**
3. Choose "Activate" or "Deactivate"

TODO: ADD IMAGE - Screenshot showing status toggle controls

---

## Table Organization

### Sections/Areas

Organize tables by physical location:

**Creating Sections:**
1. When adding/editing tables
2. Enter section name in "Area/Section" field
3. Tables automatically group by section

**Common Sections:**
- Main Dining
- Patio/Outdoor
- Bar Area
- Private Room
- Takeout Counter

### Filtering Tables

Find tables quickly:
- **Search:** Type table name or number
- **Filter by Section:** Show only specific areas
- **Filter by Status:** Active or Inactive only
- **Sort:** By name, number, or section

TODO: ADD IMAGE - Screenshot of table filtering options

---

## Counter Service Mode

Special mode for businesses without traditional table service.

### What is Counter Service?

Perfect for:
- Coffee shops
- Fast food restaurants
- Food trucks
- Bakeries
- Quick service restaurants

### Enabling Counter Mode

1. Go to **Settings** > **Business Settings**
2. Find **"Counter Service Mode"**
3. Toggle **"Enable Counter Mode"**
4. Configure settings:
   - **Counter Prefix:** e.g., "C-" (creates C-1, C-2, C-3...)
   - **Number of Counters:** How many order numbers to create
   - **Auto-increment:** Automatically create next number

TODO: ADD IMAGE - Screenshot of counter service configuration

### How Counter Mode Works

1. Guest scans QR code at counter
2. Places order with counter number
3. Staff calls number when ready
4. Guest picks up order

**Example Flow:**
- Guest scans QR → Assigned "C-15"
- Places order
- Staff prepares order
- "Order C-15 ready!"
- Guest picks up

---

## Table Details & Information

### Viewing Table Details

Click any table to see:
- **Table Name/Number**
- **Section/Area**
- **QR Code**
- **Table URL**
- **Status** (Active/Inactive)
- **Current Bill** (if any)
- **Order History**
- **Total Revenue** (all-time)

TODO: ADD IMAGE - Screenshot of table details view

### Table Analytics

Track performance per table:
- **Total Orders** - Lifetime order count
- **Total Revenue** - All-time sales
- **Average Bill** - Average order value
- **Last Used** - Most recent activity
- **Popular Items** - Most ordered from this table

---

## Editing Tables

### Updating Table Information

1. Click the **edit icon** (✏️) on any table
2. Modify:
   - Table name/number
   - Section/area
   - Capacity
   - Status
3. Click **"Save Changes"**

**Note:** Editing a table doesn't change its QR code or URL. Guests can continue using the same QR code.

---

## Deleting Tables

### Removing a Table

1. Click the **delete icon** (🗑️) on a table
2. Confirm deletion
3. Table and QR code are permanently removed

:::danger Warning
Deleting a table:
- ❌ Makes the QR code stop working
- ❌ Removes all table history
- ❌ Cannot be undone
- ✅ Consider deactivating instead of deleting
:::

**Better Alternative:** Deactivate the table instead of deleting it. This preserves history and you can reactivate it later.

---

## Bulk Operations

Manage multiple tables at once.

### Bulk Actions Available

1. **Select Tables** - Check boxes next to tables
2. **Choose Action:**
   - Activate selected tables
   - Deactivate selected tables
   - Change section/area
   - Delete selected tables
   - Download all QR codes

TODO: ADD IMAGE - Screenshot of bulk actions menu

### Bulk QR Code Download

Download all QR codes at once:

1. Select tables (or select all)
2. Click **"Bulk Actions"** > **"Download QR Codes"**
3. Choose format (PNG, SVG, or PDF)
4. Get ZIP file with all QR codes
5. Each file named with table name

Perfect for printing all codes at once!

---

## Table URL Structure

Understanding your table URLs helps with troubleshooting.

### URL Format

```
https://payverge.io/t/[unique-code]
```

**Example:**
```
https://payverge.io/t/abc123xyz
```

### URL Features

- **Unique Code** - Each table has different code
- **Permanent** - URL never changes
- **Shareable** - Can be shared via text/email
- **Mobile Optimized** - Works on all devices

### Sharing Table URLs

Besides QR codes, you can share URLs:
- **Copy Link** - Click to copy URL
- **Send via SMS** - Text to customers
- **Email** - Send to hotel guests
- **Social Media** - Share for takeout orders

TODO: ADD IMAGE - Screenshot of URL sharing options

---

## Guest Experience from QR Code

Understanding what guests see helps you optimize:

### Scanning Process

1. **Guest Opens Camera** - Native camera app
2. **Points at QR Code** - Camera detects code
3. **Notification Appears** - "Open in Safari/Chrome"
4. **Taps Notification** - Opens your menu
5. **Starts Browsing** - No app download needed

### What Guests See

After scanning:
- Your business logo and name
- Welcome message
- Full digital menu
- Navigation (Menu, Bill, Service)
- Language selection (if enabled)

TODO: ADD IMAGE - Screenshots showing guest scanning and landing experience

---

## Troubleshooting

### QR Code Not Working

**Check:**
- ✅ Table status is "Active"
- ✅ QR code is clear and not damaged
- ✅ Lighting is adequate for scanning
- ✅ Guest has internet connection
- ✅ Your subscription is active

**Solutions:**
- Reprint QR code if damaged
- Increase QR code size
- Ensure good lighting
- Test with your own phone

### Guest Can't Scan

**Common Issues:**
- Camera permission denied
- QR code too small
- Poor lighting
- Damaged/dirty QR code
- Old phone without QR support

**Solutions:**
- Provide manual URL as backup
- Print larger QR codes
- Clean QR code surface
- Add instructions: "Point camera at code"

### Wrong Table Showing

**This shouldn't happen, but if it does:**
- Each QR code is unique
- Contact support immediately
- Provide table name and URL
- We'll investigate and fix

---

## Best Practices

### Physical Placement

**Table Tents:**
- Place in center of table
- Ensure visible from all seats
- Keep clean and undamaged
- Replace if worn

**Stickers:**
- Apply to clean, dry surface
- Place where easily visible
- Avoid areas that get wet
- Consider protective coating

**Wall Posters:**
- Mount at eye level
- Near entrance or counter
- Include instructions
- Good lighting

### Maintenance

**Weekly:**
- Check all QR codes are visible
- Clean any dirty codes
- Replace damaged codes
- Test random codes

**Monthly:**
- Review table analytics
- Reorganize sections if needed
- Update table names if changed
- Archive unused tables

### Security

- Don't share QR code images publicly
- Monitor for unauthorized table access
- Deactivate tables during closed hours
- Report suspicious activity

---

## Advanced Features

### Table Reservations

Coming soon:
- Reserve tables in advance
- Block tables for events
- Timed table availability
- Reservation management

### Table Tracking

Monitor in real-time:
- Which tables have active bills
- How long guests have been seated
- Order status per table
- Server assignments

### Multi-Location

For businesses with multiple locations:
- Separate table sets per location
- Location-specific menus
- Centralized management
- Location analytics

---

## Next Steps

Now that you have tables set up:

- **[Create Your Menu](/business-owners/menu-builder)** - Build your digital menu
- **[Manage Bills](/business-owners/bills)** - Track customer payments
- **[Staff Management](/business-owners/staff-management)** - Invite your team

---

**Need help?** Contact support@payverge.io
