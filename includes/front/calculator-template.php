<?php

/**
 * This template contains the ROI Calculator, now it won't work 
 * on React, therefore, the performance could be slower than 
 * the previous REPO Version
 */

function ldb_roi_calculator_template()
{

    $industries = [
        ['name' => 'Software Dev', 'slug' => 'software-dev', 'value' => 5],
        ['name' => 'Marketing & Advertising', 'slug' => 'marketing-advertising', 'value' => 10],
        ['name' => 'SaaS', 'slug' => 'saas', 'value' => 10],
        ['name' => 'Healthcare', 'slug' => 'healthcare', 'value' => 20],
        ['name' => "IT Services", 'slug' => 'it-services', 'value' => 7],
        ['name' => "Fin-tech", 'slug' => 'fin-tech', 'value' => 7],
        ['name' => "Animation", 'slug' => 'animation', 'value' => 7],
        ['name' => 'eLearning', 'slug' => 'elearning', 'value' => 10],
        ['name' => 'Manufacturing', 'slug' => 'manufacturing', 'value' => 15],
        ['name' => 'Construction', 'slug' => 'construction', 'value' => 20],
        ['name' => 'Transportation', 'slug' => 'transportation', 'value' => 10],
        ['name' => 'Average', 'slug' => '', 'value' => 10],
    ];


    ob_start();
?>

    <section>
        <div class="calculator__container">

            <div class="calculator-form__container">
                <div class="col">
                    <fieldset>
                        <h4>Your industry</h4>
                        <span>Choose your industry, or pick Average if you can't find it.</span>
                        <select name="industrySelector" id="industrySelector" onchange=onChangeIndustry()>
                            <?php foreach ($industries as $industry) : ?>
                                <option key="<?= $industry['slug'] ?>" value="<?= $industry['value'] ?>"><?= $industry['name'] ?></option>
                            <?php endforeach; ?>
                        </select>
                    </fieldset>
                    <fieldset>
                        <h4>Average Deal Size, $</h4>
                        <span>Choose the average size of your deals.</span>
                        <label id="dealSizeLabel">label</label>
                        <input type="range" name="dealSize" id="dealSize" min=1000 max=100000 step=1000 value=1000 oninput=onDealSizeChange() />
                    </fieldset>
                    <fieldset>
                        <h4>Number of B2B/B2C prospects</h4>
                        <span>Choose the number of prospects you want to engage each month.</span>
                        <label id="prospectsLabel">{formatter2.format(prospects)}</label>
                        <input name="prospects" id="prospects" type="range" min=850 max=4500 step=50 value=850 oninput=onProspectsChange() />
                    </fieldset>
                    <fieldset>
                        <h4>Close Ratio (after appointment) %</h4>
                        <span>To calculate this number, divide the number of sales you made by the number of quotes you sent out.</span>
                        <label id="ratioLabel">label</label>
                        <input type="range" name="ratioLDB" id="ratioLDB" min=10 max=100 step=10 value=10 oninput=onRatioChange() />
                    </fieldset>
                </div>


                <div class="col">

                    <h4>B2B/B2C lead generation that sees your business through </h4>


                    <div class="result-box">
                        <span class="result" id="ldbPrice">{formatter.format(price)}/year</span>
                    </div>

                    <div class="result-row">
                        <div class="result-box">
                            <span class="result" id="ldbApproximate">{approximate}</span>
                            <span>Approx. number of appointment booked / monthly</span>
                        </div>
                        <div class="result-box">
                            <span class="result" id="ldbROI">{roiValue}%</span>
                            <span>Return on marketing investment</span>
                        </div>
                    </div>

                    <span>Each model offers flexible pricing to fit your lead generation needs and stay within the limits of your budget.</span>

                </div>
            </div>
        </div>
    </section>

<?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
