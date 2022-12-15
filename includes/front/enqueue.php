<?php

function ldb_roi_enqueue()
{
    wp_enqueue_style('ldb-roi-styles', LDB_ROI_CALC_DIR . 'assets/calculator.css', [], null, 'all');

    wp_enqueue_script('ldb-roi-app', LDB_ROI_CALC_DIR . 'assets/calculator.js', [], null, true);
}
