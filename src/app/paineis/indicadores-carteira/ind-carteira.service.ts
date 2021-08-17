import { Injectable } from "@angular/core";
var jslinq = require("jslinq");

@Injectable({ providedIn: "root" })
export class IndicadoresCarteiraService {
  dataFilesBasePath: string = "../../assets/";

  generateJsonArrayFromCSV(fileName: string) {
    let csvToJson = require("convert-csv-to-json");

    let json = csvToJson.getJsonFromCsv(this.dataFilesBasePath + fileName);

    return json;
  }

  listIndicadoresCarteira() {
    let arrayContratos = this.generateJsonArrayFromCSV("CONTRATOS.csv");
    let arrayProdutos = this.generateJsonArrayFromCSV("PRODUTOS.csv");

    let queryObjContratos = jslinq(arrayContratos);

    let result = queryObjContratos
      .groupBy(function (el) {
        return el.CO_PRODUTO;
      })
      .sum(function (el) {
        return el.VR_EXPOSICAO;
      })
      .sum(function (el) {
        return el.VR_PROVISAO;
      })
      .sum(function (el) {
        return el.VR_PROVISAO / el.VR_EXPOSICAO;
      })
      .average(function (el) {
        return el.QT_DIAS_ATRASO;
      })
      .average(function (el) {
        return el.VR_EXPOSICAO;
      })
      .toList();
  }
}
