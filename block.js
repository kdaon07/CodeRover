Blockly.Blocks['cfront'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("앞으로 이동");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['cfront'] = function (block) {
    var distance = 10;
    var code = '';
    code += '  console.log("앞으로" + ' + distance + ' + "만큼");\n';
    code += '  cd(1);\n';
    code += '  savecode(1, "f");'
    return code;
};


Blockly.Blocks['cback'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("뒤로 이동");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['cback'] = function (block) {
    var distance = 10

    var code = '';
    code += '  console.log("뒤로" + ' + distance + ' + "만큼");\n';
    code += '  cd(2);\n';
    code += '  savecode(1, "b");'
    return code;
};


Blockly.Blocks['crot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("왼쪽으로 회전");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(235);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['crot'] = function (block) {
    var angle = 90;

    var code = '';
    code += '  console.log(' + angle + ' + "만큼 회전");\n';
    code += '  cd(4);\n';
    code += '  savecode(1, "l");'
    return code;
};

Blockly.Blocks['crot2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("오른쪽으로 회전");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(235);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['crot2'] = function (block) {
    var angle = 180;

    var code = '';
    code += '  console.log(' + angle + ' + "만큼 회전");\n';
    code += '  cd(3);\n';
    code += '  savecode(1, "r");'
    return code;
};