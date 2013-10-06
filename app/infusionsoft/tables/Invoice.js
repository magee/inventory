module.exports = Invoice = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Mon Aug 19 2013 21:29:00 GMT-0500 (CDT)

// This table holds data related to an individual invoice. Remember that one order
// (Job) has one invoice, while one subscription (RecurringOrder) has multiple
// invoices.
.class('Invoice') .define({

    __static__field__primary__number__read__Id:
        'Id',

    __static__field__number__read__ContactId:
        'ContactId',

    __static__field__number__read__JobId:
        'JobId',

    __static__field__datetime__read__DateCreated:
        'DateCreated',

    __static__field__number__read__InvoiceTotal:
        'InvoiceTotal',

    __static__field__number__read__TotalPaid:
        'TotalPaid',

    __static__field__number__read__TotalDue:
        'TotalDue',

    __static__field__number__read__PayStatus:
        'PayStatus',

    __static__field__number__read__CreditStatus:
        'CreditStatus',

    __static__field__number__read__RefundStatus:
        'RefundStatus',

    __static__field__number__read__PayPlanStatus:
        'PayPlanStatus',

    __static__field__number__read__AffiliateId:
        'AffiliateId',

    __static__field__number__read__LeadAffiliateId:
        'LeadAffiliateId',

    __static__field__string__read__PromoCode:
        'PromoCode',

    __static__field__string__read__InvoiceType:
        'InvoiceType',

    __static__field__string__read__Description:
        'Description',

    __static__field__string__read__ProductSold:
        'ProductSold',

    __static__field__number__read__Synced:
        'Synced'

});