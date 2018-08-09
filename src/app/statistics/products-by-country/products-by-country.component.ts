import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/products.service';
import * as d3 from 'd3'
import {AggProduct} from '../../models/AggProduct';

@Component({
  selector: 'app-products-by-country',
  templateUrl: './products-by-country.component.html',
})
export class ProductsByCountryComponent implements OnInit {
  private products: Array<AggProduct>;
  private margin;
  private width;
  private height;

  private xScale;
  private yScale;

  private line;

  private svg;

  private maxPrice;
  private maxHand;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAllProductsByHand().subscribe((products)=> {
      this.products = products;
      this.maxPrice = Math.max(...products.map(p => p.avgPrice));
      this.maxHand = Math.max(...products.map(p => p._id));

      this.initGraph();
    })
  }

  private initGraph(){
    let _this = this;
    this.margin = {top: 30, right: 20, bottom: 30, left: 50};
    this.width = 600 - this.margin.left - this.margin.right;
    this.height = 270 - this.margin.top - this.margin.bottom;

    this.xScale = d3.scaleLinear()
      .domain([0, this.maxHand]) // input
      .range([0, this.width]); // output

   this.yScale = d3.scaleLinear()
      .domain([0, this.maxPrice]) // input
      .range([this.height,0]); // output

    this.line = d3.line()
      .x(function(d, i) {
        return _this.xScale(d['_id']);
      }) // set the x values for the line generator
        .y(function(d, i) {
          return _this.yScale(d['avgPrice']);
        }) // set the y values for the line generator
      .curve(d3.curveMonotoneX);// apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset = d3.range(this.products.length - 1).map(function(d) {
        return {
          "avgPrice" : _this.products[d].avgPrice,
          "_id" : _this.products[d]._id
        }
    })

    this.svg = d3.select(".productsGraph").append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    // 3. Call the x axis in a group tag
    this.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(this.xScale)); // Create an axis component with d3.axisBottom

// 4. Call the y axis in a group tag
    this.svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(this.yScale)); // Create an axis component with d3.axisLeft

// 9. Append the path, bind the data, and call the line generator
    this.svg.append("path")
      .datum(dataset) // 10. Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("d", this.line); // 11. Calls the line generator

// 12. Appends a circle for each datapoint
    this.svg.selectAll(".dot")
      .data(dataset)
      .enter().append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d, i) { return _this.xScale(parseInt(d['_id'])) })
      .attr("cy", function(d, i) { return _this.yScale(parseInt(d['avgPrice'])) })
      .attr("r", 5)
  }

}
