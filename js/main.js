// Load Vega-Lite visualisations

vegaEmbed("#rail-map", "charts/map.json", {
    actions: false
})
    .then(function () {
        console.log("Railway map loaded successfully.");
    })
    .catch(function (error) {
        console.error("Error loading railway map:", error);
    });

vegaEmbed("#ridership-line", "charts/line.json", {
    actions: false
});

vegaEmbed("#stacked-area", "charts/area.json", {
    actions: false
});

vegaEmbed("#heatmap-chart", "charts/heatmap.json", {
    actions: false
});

vegaEmbed("#small-multiples-chart", "charts/small_multiples.json");

vegaEmbed("#donut-chart", "charts/donut.json", {
  actions: false
});

vegaEmbed("#ranking-chart", "charts/ranking.json", {
  actions: false
});

vegaEmbed("#interactive-chart", "charts/interactive.json", {
    actions: false
});

vegaEmbed("#scatter-chart", "charts/scatter.json", {
    actions: false
});

vegaEmbed("#connected-dot-chart", "charts/connected_dot.json", {
    actions: false
});