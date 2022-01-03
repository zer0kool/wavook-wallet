    createModal: function (accountList) {
        $('#modalicon').empty()
        .append($('<i>').addClass('medium material-icons left green-text').append($('<span>').text(i18njs('content_copy'))))
        $('#modalbody').empty();
        $('#modalbody').append(
                $('<p>').addClass('title').text(i18njs('Create new recurring operation')))
            .append(
                $('<div>').addClass('columns')
                .append(
                    $('<div>').addClass('content column')
                    .append(HTMLElements.datePicker())
                    .append(HTMLElements.timeSpanPicker())
                    .append(HTMLElements.repeatPicker())
                )
                .append(
                    $('<div>').addClass('content column')
                    .append(HTMLElements.accountFilter(accountList))
                    .append(HTMLElements.typePicker())
                    .append(HTMLElements.amountPicker())
                )
                .append(
                    $('<div>').addClass('content column')
                    .append(HTMLElements.beneficiaryPicker())
                    .append(HTMLElements.categoryPicker())
                    .append(HTMLElements.labelPicker())
                )
            )
            .append(
                $('<div>').addClass('field')
                .append(
                    $('<p>').addClass('control pull-left')
                    .append($('<a>').addClass('button is-info').attr('id', 'rec-create').attr('onclick', 'createNewRecurringOperation()').text(i18njs('Create')))
                ).append(
                    $('<p>').addClass('control pull-right')
                    .append($('<a>').addClass('button is-danger').attr('onclick', 'closeModal()').text(i18njs('Cancel')))
                )
            )
        $('#rec-date').val(moment().format(globSettings.dateFormat))
    },


        style="margin:0; flex:1;"
