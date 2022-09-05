// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.0 <0.9.0;

contract Notes {
    string public title;
    string public text;

    constructor(string memory _title, string memory _text) {
        title = _title;
        text = _text;
    }

    function setTitle(string memory _title) public {
        title = _title;
    }

    function setText(string memory _text) public {
        text = _text;
    }
}
