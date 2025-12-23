---
sidebar_position: 4
title: Bill Management
---

# Bill Management

Bills are the core of your transaction tracking in Payverge. This guide covers creating, managing, and closing bills for your customers.

## Understanding Bills

A bill in Payverge represents a customer's order and payment transaction. Bills can be:

- **Guest-Created** - Customers create bills by ordering from QR code menus
- **Staff-Created** - Manually created by servers or managers
- **Active** - Currently open and accepting orders
- **Paid** - Payment received but not yet closed
- **Closed** - Finalized and archived

---

## Accessing Bill Management

1. Log into your Business Dashboard
2. Click **"Bills"** in the sidebar
3. View all bills with filtering options

TODO: ADD IMAGE - Screenshot of bill management interface

---

## Bill Views

### Active Bills

Shows all currently open bills:
- Bills with unpaid balances
- Bills accepting new orders
- Real-time updates
- Quick actions available

**Information Displayed:**
- Bill number
- Table name
- Total amount
- Time opened
- Status
- Quick actions

TODO: ADD IMAGE - Screenshot of active bills list

### Bill History

View past bills:
- Closed bills
- Paid bills
- Search by date range
- Filter by status
- Export data

**Search & Filter:**
- Date range picker
- Search by bill number
- Filter by table
- Filter by amount range
- Sort by date, amount, or table

TODO: ADD IMAGE - Screenshot of bill history with filters

---

## Creating Bills Manually

Staff can create bills for walk-in customers or phone orders.

### Using Bill Creator

1. Click **"Create Bill"** button
2. Select table or create custom bill
3. Add items to the bill
4. Review and finalize

TODO: ADD IMAGE - Screenshot of bill creator interface

### Adding Items

**Method 1: Search**
1. Type item name in search box
2. Select item from results
3. Choose quantity
4. Add to bill

**Method 2: Browse**
1. Browse menu categories
2. Click items to add
3. Adjust quantities
4. Confirm additions

**Method 3: Quick Add**
1. Use quick-add buttons for popular items
2. One-click to add
3. Adjust quantity if needed

TODO: ADD IMAGE - Screenshot of item selection interface

### Item Customization

When adding items, you can:
- **Select Options** - Required choices (size, protein, etc.)
- **Add Add-ons** - Optional extras
- **Special Requests** - Custom notes
- **Adjust Quantity** - Multiple of same item

---

## Bill Details

### Viewing Bill Information

Click any bill to see complete details:

**Bill Header:**
- Bill number (unique identifier)
- Table name/number
- Date and time created
- Current status
- Total amount

**Items List:**
- All ordered items
- Quantities
- Individual prices
- Options and add-ons
- Special requests
- Item subtotals

**Financial Breakdown:**
- Subtotal (before tax)
- Tax amount
- Service fee (if applicable)
- Tip amount (if added)
- **Total Amount**

TODO: ADD IMAGE - Screenshot of detailed bill view

---

## Bill Status

Bills progress through several statuses:

### Open
- 🟢 Bill is active
- Can add more items
- No payment received
- Guests can still order

### Pending Payment
- 🟡 Items finalized
- Awaiting payment
- No new orders accepted
- Payment in progress

### Paid
- 🔵 Payment received
- Awaiting closure
- Can generate receipt
- Ready to close

### Closed
- ⚫ Bill finalized
- Archived
- Cannot be modified
- Included in reports

TODO: ADD IMAGE - Diagram showing bill status flow

---

## Managing Bill Items

### Adding Items to Existing Bills

1. Open the bill
2. Click **"Add Items"**
3. Select items (same as bill creation)
4. Items added to bill
5. Total updates automatically

### Removing Items

1. Open the bill
2. Find item to remove
3. Click **remove icon** (🗑️)
4. Confirm removal
5. Total adjusts automatically

:::warning Important
Only remove items before payment is processed. After payment, contact support for refunds.
:::

### Modifying Quantities

1. Open the bill
2. Find item to modify
3. Click quantity field
4. Enter new quantity
5. Total updates automatically

---

## Payments

### Payment Methods

Bills can be paid through:

**Crypto Payments (USDC)**
- Guest pays directly from their wallet
- Instant settlement
- No chargebacks
- Automatic bill update

**Traditional Payment Plugins**
- PayPal
- Stripe (credit/debit cards)
- MercadoPago
- Other enabled plugins

**Cash/Card at Counter**
- Guest pays in person
- Staff manually marks as paid
- Record payment method

TODO: ADD IMAGE - Screenshot of payment methods selection

### Processing Crypto Payments

**Guest-Initiated:**
1. Guest views bill on their device
2. Clicks "Pay with Crypto"
3. Connects wallet
4. Approves USDC payment
5. Payment processes on blockchain
6. Bill automatically updates to "Paid"

**Real-time Updates:**
- Payment notification appears instantly
- Bill status changes automatically
- Receipt generated
- Kitchen notified (if applicable)

### Recording Manual Payments

For cash or card payments at counter:

1. Open the bill
2. Click **"Mark as Paid"**
3. Select payment method:
   - Cash
   - Credit Card
   - Debit Card
   - Other
4. Enter amount received
5. Calculate change (if cash)
6. Click **"Confirm Payment"**

TODO: ADD IMAGE - Screenshot of manual payment recording

---

## Bill Splitting

Allow multiple guests to split a bill.

### Split Methods

**Equal Split**
- Divide bill evenly among guests
- Each pays equal amount
- Automatic calculation

**By Item**
- Assign items to specific guests
- Each pays for their items
- Shared items split proportionally

**Custom Amount**
- Each guest pays custom amount
- Flexible splitting
- Must total to bill amount

TODO: ADD IMAGE - Screenshot of bill splitting interface

### How Splitting Works

1. Guest or staff initiates split
2. Choose split method
3. Assign items or amounts
4. Each guest pays their portion
5. Bill tracks all payments
6. Closes when fully paid

**Multi-Payment Tracking:**
- See who paid what amount
- Track payment methods used
- View payment timestamps
- Generate individual receipts

---

## Closing Bills

### When to Close Bills

Close bills after:
- ✅ Payment received in full
- ✅ Guest has left
- ✅ Receipt provided (if requested)
- ✅ No disputes or issues

### Closing Process

1. Verify payment received
2. Open the bill
3. Click **"Close Bill"**
4. Confirm closure
5. Bill moves to history

**What Happens:**
- Bill marked as closed
- Included in daily reports
- Table becomes available
- Data archived

:::tip Best Practice
Close bills promptly after guests leave to keep your active bills list clean and accurate.
:::

---

## Receipts

### Generating Receipts

**Digital Receipts:**
1. Open paid bill
2. Click **"Generate Receipt"**
3. Receipt displays on screen
4. Guest can:
   - View on device
   - Download PDF
   - Email to themselves
   - Share via text

**Printed Receipts:**
1. Generate receipt
2. Click **"Print"**
3. Connect to printer
4. Print physical copy

TODO: ADD IMAGE - Screenshot of digital receipt

### Receipt Information

Receipts include:
- Business name and logo
- Business address and contact
- Bill number
- Date and time
- Table number
- Itemized list with prices
- Subtotal, tax, tip, total
- Payment method
- Transaction ID (for crypto)
- Thank you message

---

## Tips & Gratuity

### How Tips Work

**Guest-Added Tips:**
- Guests can add tips when paying
- Choose percentage (15%, 18%, 20%, custom)
- Or enter custom amount
- Tips included in total payment

**Tip Distribution:**
- Tips go to business wallet
- Business distributes to staff
- Track tip amounts per bill
- Generate tip reports

TODO: ADD IMAGE - Screenshot of tip selection interface

### Tip Reporting

View tip analytics:
- Total tips per day/week/month
- Average tip percentage
- Tips by server (if tracked)
- Tips by payment method

---

## Bill Search & Filtering

Find bills quickly with powerful search:

### Search Options

**By Bill Number:**
- Enter full or partial bill number
- Instant results

**By Table:**
- Filter by specific table
- See all bills from a table

**By Date Range:**
- Select start and end dates
- View bills in period

**By Amount:**
- Set minimum and maximum
- Find high-value bills

**By Status:**
- Open, Paid, Closed
- Multiple status selection

TODO: ADD IMAGE - Screenshot of search and filter options

---

## Bill Analytics

Track bill performance and trends.

### Key Metrics

**Average Bill Value:**
- Mean transaction amount
- Helps set revenue targets
- Track over time

**Bills per Day:**
- Daily transaction count
- Identify busy periods
- Staff scheduling insights

**Payment Method Distribution:**
- Crypto vs traditional
- Most popular methods
- Processing cost analysis

**Table Performance:**
- Revenue by table
- Most profitable locations
- Optimization opportunities

TODO: ADD IMAGE - Screenshot of bill analytics dashboard

---

## Bulk Operations

Manage multiple bills at once.

### Available Actions

1. **Select Bills** - Check boxes next to bills
2. **Choose Action:**
   - Close selected bills
   - Export to CSV
   - Print receipts
   - Generate reports

**Export Options:**
- CSV format
- Excel compatible
- Include all bill details
- Filter before export

---

## Troubleshooting

### Bill Won't Close

**Check:**
- Payment fully received
- No pending items
- All orders fulfilled
- No active disputes

**Solution:**
- Verify payment amount matches total
- Check for partial payments
- Contact support if stuck

### Payment Not Showing

**For Crypto Payments:**
- Check blockchain confirmation
- Wait 30-60 seconds
- Verify transaction hash
- Check wallet balance

**For Manual Payments:**
- Verify staff marked as paid
- Check payment method recorded
- Refresh the page

### Items Missing from Bill

**Possible Causes:**
- Order not approved by staff
- Item removed before payment
- Technical issue

**Solution:**
- Check order history
- Verify with kitchen
- Add items if needed
- Contact support if persistent

---

## Best Practices

### Daily Routine

**Opening:**
- Review any overnight bills
- Close any forgotten bills
- Check for payment issues

**During Service:**
- Monitor active bills
- Approve orders promptly
- Process payments quickly
- Close bills when guests leave

**Closing:**
- Close all remaining bills
- Verify all payments received
- Generate daily report
- Prepare for next day

### Organization

- Close bills promptly
- Use consistent naming for custom bills
- Record payment methods accurately
- Add notes for special situations
- Archive old bills regularly

### Customer Service

- Provide receipts when requested
- Handle split bills gracefully
- Process payments quickly
- Resolve disputes professionally
- Thank guests for payment

---

## Advanced Features

### Bill Notes

Add internal notes to bills:
- Special requests
- Customer preferences
- Issues or complaints
- Follow-up needed

**Notes are:**
- ✅ Visible to staff
- ❌ Not visible to guests
- ✅ Included in reports
- ✅ Searchable

### Bill Templates

Create templates for common orders:
- Set menus
- Combo meals
- Party packages
- Catering orders

### Recurring Bills

For regular customers:
- Save bill as template
- Quick recreation
- Consistent pricing
- Faster service

---

## Next Steps

Now that you understand bill management:

- **[Menu Builder](/business-owners/menu-builder)** - Manage your menu items
- **[Table Management](/business-owners/tables)** - Set up tables and QR codes
- **[Staff Management](/business-owners/staff-management)** - Manage your team

---

**Need help?** Contact support@payverge.io
