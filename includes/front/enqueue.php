<?php

function ldb_roi_enqueue()
{
    wp_enqueue_style('ldb-roi-styles', plugins_url('../../assets/calculator.css', __FILE__), [], null, 'all');

    wp_enqueue_script('ldb-roi-app', plugins_url('../../assets/calculator.js', __FILE__), [], null, true);
}
