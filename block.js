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
    code += '  walk();\n';
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
    code += '  walk2();\n';
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
    code += '  turnLeft();\n';
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
    code += '  turnRight();\n'
    return code;
};

Blockly.Blocks['ccolor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LED")
            .appendField(new Blockly.FieldColour("#ff0000"), "color")
            .appendField("만큼 변경");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['ccolor'] = function (block) {
    var color = block.getFieldValue('color');
    var code = '';
    code += '  console.log("색상을 ' + color + ' 만큼 변경");\n';
    return code;
};
