function setUp(){

	

  y.domain(d3.extent(totData, function(d) { return d.value; }));
  x.domain(unique(totData.map(function(d) { return d.variable; })))


  xLine.domain(unique(totData.map(function(d) { return d.Period; })))
  yLine.domain(d3.extent(totData, function(d) { return d.value; }));
  
	var select = d3.select("#countryFilter")
      .selectAll("option")
        .data(countryList.sort(function(x, y){return d3.ascending(x.Country, y.Country);}))
        .enter().append("option")
        .attr("value", function(d) { 
          return d.ISO; })
        .text(function(d) { return d.Country; });

    document.getElementById("countryFilter").value="AUS";
    chartDrawing("AUS")

}