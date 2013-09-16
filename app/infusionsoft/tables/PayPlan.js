module.exports = PayPlan = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Mon Aug 19 2013 21:29:00 GMT-0500 (CDT)

// This table holds the PayPlan data tied to each invoice in the system.
.class('PayPlan') .define({

    __static__field__primary__number__read__Id:
        'Id',

    __static__field__number__read__InvoiceId:
        'InvoiceId',

    __static__field__datetime__read__DateDue:
        'DateDue',

    __static__field__number__read__AmtDue:
        'AmtDue',

    __static__field__number__read__Type:
        'Type',

    __static__field__datetime__read__InitDate:
        'InitDate',

    __static__field__datetime__read__StartDate:
        'StartDate',

    __static__field__number__read__FirstPayAmt:
        'FirstPayAmt'

});