let content = [
    {
        text: `Referral / Physicians's Prescription`,
        style: 'header'
    },
    'Please PRINT CLEARLY and complete all the information below and Email or fax this form along with notes related to the relevant medical history & treatment to: Fax 855-950-0092',
    {
        style: 'tableExample',
        color: '#444',
        table: {
            widths: ['auto', 'auto', 'auto', 'auto'],
            headerRows: 4,
            body: [
                [
                    {
                        text: 'PATIENT INFORMATION:',
                        style: 'subheader',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, true, true, false]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'Patient Name: ________________________________________________',
                        colSpan: 3,
                        alignment: 'left',
                        border: [true, false, false, false],
                        margin: [0, 0, 0, 10]
                    },
                    {},
                    {},
                    {
                        text: 'Date of Birth: ______________',
                        alignment: 'left',
                        border: [false, false, true, false],
                        margin: [0, 0, 0, 10]
                    }
                ],
                [
                    {
                        text: 'Patient Address: ____________________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 0, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'City: ________________',
                        border: [true, false, false, true],
                        // margin: [0, 0, 0, 0],
                    },
                    {
                        text: 'State: _____________',
                        border: [false, false, false, true],
                        // margin: [0, 0, 0, 0]
                    },
                    {
                        text: 'Zip Cdoe: __________',
                        border: [false, false, false, true],
                        // margin: [0, 0, 0, 0]
                    },
                    {
                        text: 'Phone: _____________________',
                        border: [false, false, true, true],
                        // margin: [0, 0, 0, 0]
                    }
                ],
            ]
        },
        //     layout: {
        // hLineWidth: function (i, node) {
        // 	return (i === 0 || i === node.table.body.length) ? 2 : 1;
        // },
        // vLineWidth: function (i, node) {
        // 	return (i === 0 || i === node.table.widths.length) ? 2 : 1;
        // }
        //     }
    },
    {
        style: 'tableExample',
        color: '#444',
        table: {
            widths: ['auto', 'auto', 'auto', 'auto'],
            headerRows: 4,
            // heights: [20,30,30,50],
            // margins : [10,0,0,0]
            // height:100,
            // keepWithHeaderRows: 1,
            body: [
                [
                    {
                        text: 'DIAGNOSIS AND RELATED INFO:',
                        style: 'subheader',
                        colSpan: 3,
                        alignment: 'left',
                        border: [true, true, false, false]
                    },
                    {},
                    {},
                    {
                        text: 'Date of Incident: __________________________',
                        colSpan: 1,
                        border: [false, true, true, false],
                        margin: [-80, 10, 0, 10]
                    }
                ],
                [
                    {
                        text: 'Diagnosis: ____________________________________________________',
                        colSpan: 3,
                        alignment: 'left',
                        border: [true, false, false, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {
                        text: 'ICD 10 Code: _______________',
                        alignment: 'left',
                        border: [false, false, true, false],
                        margin: [0, 5, 0, 10]
                    }
                ],
                [
                    {
                        text: 'Symptoms: _________________________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'Limitation:__________________________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'City: _______________',
                        border: [true, false, false, true],
                        // margin: [0, 5, 0, 10],
                    },
                    {
                        text: 'State: ____________',
                        border: [false, false, false, true],
                        // margin: [0, 5, 0, 10]
                    },
                    {
                        text: 'Zip Cdoe: ____________',
                        border: [false, false, false, true],
                        // margin: [0, 5, 0, 10]
                    },
                    {
                        text: 'Phone: _____________________',
                        border: [false, false, true, true],
                        // margin: [0, 5, 0, 10]
                    }
                ],
            ]
        },
        //     layout: {
        // hLineWidth: function (i, node) {
        // 	return (i === 0 || i === node.table.body.length) ? 2 : 1;
        // },
        // vLineWidth: function (i, node) {
        // 	return (i === 0 || i === node.table.widths.length) ? 2 : 1;
        // }
        //     }
    },
    {
        style: 'tableExample',
        color: '#444',
        table: {
            widths: ['auto', 'auto', 'auto', 'auto'],
            headerRows: 4,
            // heights: [20,30,30,50],
            // margins : [10,0,0,0]
            // height:100,
            // keepWithHeaderRows: 1,
            body: [
                [
                    {
                        text: 'PHYSICIAN\'s INFORMATION:',
                        style: 'subheader',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, true, true, false]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'Physician Name (Print): _____________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'Physician Address: __________________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'City: _______________',
                        margin: [0, 5, 0, 10],
                        border: [true, false, false, false]
                    },
                    {
                        text: 'State: ____________',
                        border: [false, false, false, false],
                        margin: [0, 5, 0, 10]
                    },
                    {
                        text: 'Zip Cdoe: ____________',
                        border: [false, false, false, false],
                        margin: [0, 5, 0, 10]
                    },
                    {
                        text: 'Phone: _____________________',
                        border: [false, false, true, false],
                        margin: [0, 5, 0, 10]
                    }
                ],
                [
                    {
                        text: 'Limitation:__________________________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'NPI#: _______________________________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, false],
                        margin: [0, 5, 0, 10]
                    },
                    {},
                    {},
                    {}
                ],
                [
                    {
                        text: 'Physician\'s Signature: _______________________________________________________________________',
                        colSpan: 4,
                        alignment: 'left',
                        border: [true, false, true, true],
                        margin: [0, 30, 0, 0]
                    },
                    {},
                    {},
                    {}
                ],
            ]
        },
        //     layout: {
        // hLineWidth: function (i, node) {
        // 	return (i === 0 || i === node.table.body.length) ? 2 : 1;
        // },
        // vLineWidth: function (i, node) {
        // 	return (i === 0 || i === node.table.widths.length) ? 2 : 1;
        // }
        //     }
    },
]

content.push("")

var dd = {
    content,
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            // margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 5]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
    defaultStyle: {
    }
}