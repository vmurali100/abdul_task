import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  subItem = {
    values: []
  };
  subItemsData = [
    {
      name: "booleanType",
      values: [
        { key: "bk1", value: "bvalue1" },
        { key: "bk2", value: "bvalue2" },
        { key: "bk3", value: "bvalue3" }
      ]
    },
    {
      name: "dateType",
      values: [
        { key: "dk1", value: "dvalue1" },
        { key: "dk2", value: "dvalue2" },
        { key: "dk3", value: "dvalue3" }
      ]
    }
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dropDownItems = [
    {
      key: "booleanType",
      value: "Boolean"
    },
    {
      key: "dateType",
      value: "Date"
    },
    {
      key: "decimalType",
      value: "Decimal"
    },
    {
      key: "doubleType",
      value: "Double"
    },
    {
      key: "enumType",
      value: "Enum"
    },
    {
      key: "floatType",
      value: "Float"
    },
    {
      key: "integerType",
      value: "Integer"
    },
    {
      key: "keywordType",
      value: "Keyword"
    },
    {
      key: "longType",
      value: "Long"
    },
    {
      key: "stringType",
      value: "String"
    },
    {
      key: "textType",
      value: "Text"
    },
    {
      key: "timestampType",
      value: "Timestamp"
    }
  ];
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  addRow() {
    ELEMENT_DATA.push({
      position: 1,
      name: "",
      weight: "",
      symbol: "H"
    });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  getMatValue(name) {
    this.subItem = this.subItemsData.find(item => item.name == name);
  }
}

const ELEMENT_DATA = [
  {
    position: 1,
    name: "",
    weight: "",
    symbol: "H"
  }
];
