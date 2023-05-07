import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import uuid from 'react-uuid';

const GridDataView = ({ index, headers, datas, footers, grouping }) => {
    const listHeaders = createHeaders(index, headers);
    const listDatas = createListDatas(index, headers, datas);
    const listFooters = createFooters(index, footers, headers, datas, grouping);

    return (
        <Table key={index + 'table_1'} striped bordered hover>
            <thead key={index + 'thead_1'}>{listHeaders}</thead>
            <tbody key={index + 'tbody_1'}>{listDatas}</tbody>
            <tfoot key={index + 'tfoot_1'}>{listFooters}</tfoot>
        </Table>
    );
};

const createListDatas = (key, headers, datas) => {
    if (datas === undefined || datas === null || datas.length === 0) {
        return <tr key={key + 'datas_0'}></tr>
    }
    return datas.map((data, index) => {
        const listValues = getHeaders(headers).map((header, indexCol) =>
            createColumn(key + '_' + index + '_' + indexCol, header, data)
        )
        const keyValue = key + "tr_" + index;
        return <tr key={keyValue}>{listValues}</tr>
    })
};

const createFooters = (key, footers, headers, datas, grouping) => {
    const rows = [];
    rows.push(createGrouping(key, headers, datas, grouping));
    if (Array.isArray(footers)) {
        const listRow = footers.map((r, i) => createHeader(key + '_' + i, r));
        rows.push(<tr key={key + 'footers_' + 1}>{listRow}</tr>);
    }
    return rows;
};

const createGrouping = (key, headers, datas, grouping) => {
    const hdrs = getHeaders(headers);
    const listRow = [];
    if (grouping === undefined) {
        return listRow;
    }
    if (grouping.sum !== undefined) {
        listRow.push(<th key={key + 'sum_header'}>Total</th>);
    }
    hdrs.forEach((h, i) => {
        if (i !== 0) {
            if (grouping.sum.includes(h.name)) {
                const somatorio = datas.map((d) => d[h.name]).reduce((pv, cv) => pv + cv, 0);
                listRow.push(createHeader(key + 'sum_' + i, { type: 'money', value: somatorio }));
            } else {
                listRow.push(createHeader(key + 'sum_' + i, { }));
            }
        } 
    });
    return <tr key={key + 'grouping_' + 1}>{listRow}</tr>;
};

const getHeaders = (headers) => {
    if (!Array.isArray(headers)) {
        return headers.datas
    }
    return headers
};

const createHeaders = (key, headers) => {
    const headersArr = [];
    if (headers.rows !== undefined) {
        headersArr.push(createHeadersRows(key, headers.rows));
    }
    const listHeaders = getHeaders(headers).map((header, _) => (
        <th key={uuid()} style={header.style}>{header.value}</th>
    ));
    headersArr.push(<tr key={key + 'line_1'}>{listHeaders}</tr>);
    return headersArr;
};

const createHeadersRows = (key, rows) => {
    return rows.map((row, index) => {
        if (Array.isArray(row)) {
            const listRow = row.map((r, i) =>
                createHeader(key + '_' + index + '_' + i, r)
            )
            return <tr key={uuid()}>{listRow}</tr>
        } else {
            return (
                <tr key={uuid()}>
                    {createHeader(key + 'headersrows_' + index, row)}
                </tr>
            )
        }
    });
};

const createHeader = (key, header) => {
    let colSpan = 1
    if (header.colSpan !== undefined) {
        colSpan = header.colSpan
    }

    let thConfig = {
        tdStyle: {},
        tdClass: header.class === undefined ? '' : header.class,
        value: header.value,
    }

    if (header.type === 'money') {
        thConfig = createColumnTypeMoney(thConfig, header.value)
    }

    return (
        <th
            key={'createHeader_' + key}
            style={thConfig.tdStyle}
            className={thConfig.tdClass}
            colSpan={colSpan}
        >
            {thConfig.value}
        </th>
    )
};

const createColumn = (key, header, data) => {
    const valor = getValor(header, data)
    let tdConfig = {
        tdStyle: {},
        tdClass: '',
        value: valor,
    }

    if (header.type === 'money') {
        tdConfig = createColumnTypeMoney(tdConfig, valor)
    }

    if (header.type === 'date') {
        tdConfig = createColumnTypeDate(tdConfig, valor)
    }

    if (header.type === 'text') {
        tdConfig = createColumnTypeText(key, tdConfig, header, data, valor);
    }

    if (header.type === 'button') {
        tdConfig = createColumnTypeButton(key, tdConfig, header, data);
    }

    return (
        <td
            key={'createColumn_' + key}
            style={tdConfig.tdStyle}
            className={tdConfig.tdClass}
        >
            {tdConfig.value}
        </td>
    )
};

const createColumnTypeText = (key, tdConfig, header, item, value) => {
    const onChangeHandler = function (event) { header.change(item, event.target.value); };

    const config = {
        value: <Form.Control key={'textfield_' + key} name={'textfield_' + key} value={value} onChange={onChangeHandler}></Form.Control>
    };

    return { ...tdConfig, ...config };
};

const createColumnTypeButton = (key, tdConfig, header, item) => {
    const onClickHandler = function () { header.click(item); };

    const config = {
        value: <Button key={'button_' + key} name={'button_' + key} onClick={onClickHandler}>{header.label}</Button>
    };

    return { ...tdConfig, ...config };
};

const getValor = (header, data) => {
    const arrProperties = header.name.split('.')
    return arrProperties.reduce((previousValue, currentValue) => {
        if (previousValue === '') {
            previousValue = data
        }
        return previousValue[currentValue]
    }, '')
};

const createColumnTypeMoney = (tdConfig, value) => {
    if (value === undefined) {
        value = 0;
    }
    const config = {
        tdStyle: { textAlign: 'right' },
        tdClass: value < 0 ? 'text-danger' : tdConfig.tdClass,
        value: Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }).format(value),
    }

    return { ...tdConfig, ...config }
};

const createColumnTypeDate = (tdConfig, value) => {
    const data = new Date(value)
    const config = {
        value:
            ('0' + data.getUTCDate()).slice(-2) + '/' +
            ('0' + (data.getUTCMonth() + 1)).slice(-2) + '/' +
            data.getUTCFullYear(),
    }
    return { ...tdConfig, ...config }
};

export default GridDataView;
