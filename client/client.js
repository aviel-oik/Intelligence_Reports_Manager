import readlineSync from "readline-sync";
import { createReport, savingReport, gettingAllReports, gettingAllReportsByField, searchingById, deletingById, editingReport } from "../services/functions.js";

console.log("\nWelcome to Intelligence Reports Manager")
let exit = false
while (!exit) {
    console.log("\n      === MENU ===")
    console.log("1. Add a new intelligence report")
    console.log("2. Show all reports")
    console.log("3. Search report by ID")
    console.log("4. Delete report by ID")
    console.log("5. Edit report by ID")
    console.log("0. Exit")
    let choice = readlineSync.question("Enter your choice (0-5): ")
    switch (choice) {
        case "1":
            let terroristeName = readlineSync.question("Enter the name of the terroriste: ")
            let weapons = readlineSync.question("Enter the weapons used (comma separated): ").split(",").map(weapon => weapon.trim())
            let text = readlineSync.question("Enter the report text: ")
            let id = readlineSync.question("Enter the report ID: ")
            let report
            if (terroristeName === "" || terroristeName === null || terroristeName === undefined)
                report = createReport(id, weapons, text)
            else
                report = createReport(id, weapons, text, terroristeName)
            savingReport(report)
            console.log("Report saved successfully!")
            break
        case "2":
            gettingAllReports()
            break
        case "3":
            let searchId = readlineSync.question("Enter the report ID to search: ")
            searchingById(searchId)
            break
        case "4":
            let deleteId = readlineSync.question("Enter the report ID to delete: ")
            deletingById(deleteId)
            console.log("Report deleted successfully!")
            break
        case "5":
            let editId = readlineSync.question("Enter the report ID to edit: ")
            let newTerroristeName = readlineSync.question("Enter the new name of the terroriste: ")
            let newWeapons = readlineSync.question("Enter the new weapons used (comma separated): ").split(",").map(weapon => weapon.trim())
            let newText = readlineSync.question("Enter the new report text: ")
            editingReport(editId, { terroristeName: newTerroristeName, weapons: newWeapons, text: newText })
            console.log("Report edited successfully!")
            break
        case "0":
            exit = true
            console.log("Exiting the Intelligence Reports Manager. Goodbye!")
            break
        default:
            console.log("Invalid choice. Please try again.")
    }
}   