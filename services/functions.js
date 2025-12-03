
import { dataArray } from "../dataBase/data.js"
import { nanoid } from 'nanoid';



export function createReport(id, weapons, text, terroristeName = "Muhammad — unknown last name") {
    if (id === null || (typeof id !== "number" && typeof id !== "string"))
        throw new Error("ID must be a number or a string and cannot be null")
    if (id === "" || id === null || id === undefined)
        id = nanoid();
    let newReport = {};
    return newReport = {
        id: id,
        terroristeName: terroristeName,
        weapons: [...weapons],
        text: text
    }
}

export function savingReport(report) {
    let valid = true
    for (let dataReport of dataArray)
        if (dataReport.id == report.id)
            valid = false
    for (let key in report)
        if (report[key] === "" || report[key] === null || report[key] === undefined)
            valid = false
    if (!valid)
        throw new Error("Report is not valid and cannot be saved")
    if (valid)
        dataArray.push(report)
    console.log(dataArray)
}

export function gettingAllReports() {
    dataArray.sort((a, b) => a.id.localeCompare(b.id));
    console.table(dataArray)
}

export function gettingAllReportsByField(fieldName) {
    dataArray.sort((a, b) => a.fieldName.localeCompare(b.fieldName));
    console.table(dataArray)
}

export function searchingById(id) {
    let fund = false
    for (let report of dataArray)
        if (report.id == id) {
            fund = true
            console.log(report)
        }
    if (!fund)
        throw new Error("Report with the given ID not found")
}

export function deletingById(id) {
    let fund = false
    for (let report of dataArray)
        if (report.id == id)
            fund = true
    // dataArray = dataArray.filter((report) => !(report.id == id))
    dataArray.splice(dataArray.findIndex(report => report.id == id), 1)
    if (!fund)
        throw new Error("Report with the given ID not found")
}

export function editingReport(id, newData) {
    let fund = false
    for (let report of dataArray)
        if (report.id == id) {
            fund = true
            for (let key in newData) {
                if (!(key in report))
                    throw new Error("Key " + key + " does not exist in the report")
                report[key] = newData[key]
            }
        }
    if (!fund)
        throw new Error("Report with the given ID not found")
}



