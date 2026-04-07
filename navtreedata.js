/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "C-Menu", "index.html", [
    [ "Installation Guide", "index.html", "index" ],
    [ "API", "d8/ddf/a01238.html", [
      [ "Get C-Menu on Github", "d8/ddf/a01238.html#get-c-menu-on-github", null ],
      [ "Introduction", "d8/ddf/a01238.html#introduction", null ],
      [ "API Organization", "d8/ddf/a01238.html#api-organization", [
        [ "C-Menu Header Files", "d8/ddf/a01238.html#c-menu-header-files", [
          [ "include/cm.h", "d8/ddf/a01238.html#includecmh", null ],
          [ "include/common.h", "d8/ddf/a01238.html#includecommonh", null ],
          [ "include/menu.h, form.h, pick.h, and view.h", "d8/ddf/a01238.html#includemenuh-formh-pickh-and-viewh", null ],
          [ "include/version.h and version.h", "d8/ddf/a01238.html#includeversionh-and-versionh", null ],
          [ "Version Compatibility", "d8/ddf/a01238.html#version-compatibility", null ],
          [ "Roadmap for API Documentation and User Guide", "d8/ddf/a01238.html#roadmap-for-api-documentation-and-user-guide", null ],
          [ "Documentation", "d8/ddf/a01238.html#documentation", null ]
        ] ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d8/ddf/a01238.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
    ] ],
    [ "User guide", "d7/dbf/a01239.html", [
      [ "Get C-Menu on Github", "d7/dbf/a01239.html#get-c-menu-on-github-1", null ],
      [ "Table of Contents", "d7/dbf/a01239.html#table-of-contents", null ],
      [ "Introduction", "d7/dbf/a01239.html#introduction-1", null ],
      [ "Prerequisites", "d7/dbf/a01239.html#prerequisites", [
        [ "Not Required, But Recommended", "d7/dbf/a01239.html#not-required-but-recommended", null ]
      ] ],
      [ "Getting Started", "d7/dbf/a01239.html#getting-started", [
        [ "C-Menu File Layout", "d7/dbf/a01239.html#c-menu-file-layout", null ],
        [ "RSH Safety Features", "d7/dbf/a01239.html#rsh-safety-features", null ],
        [ "Using RSH", "d7/dbf/a01239.html#using-rsh", null ],
        [ "RSH - A Use Case", "d7/dbf/a01239.html#rsh---a-use-case", null ]
      ] ],
      [ "Starting C-Menu", "d7/dbf/a01239.html#starting-c-menu", null ],
      [ "C-Menu configuration", "d7/dbf/a01239.html#c-menu-configuration", null ],
      [ "Programming C-Menu Menu", "d7/dbf/a01239.html#programming-c-menu-menu", [
        [ "Menu Example", "d7/dbf/a01239.html#menu-example", null ],
        [ "Menu Description File Format", "d7/dbf/a01239.html#menu-description-file-format", null ]
      ] ],
      [ "C-Menu Form In Depth", "d7/dbf/a01239.html#c-menu-form-in-depth", [
        [ "Form field editor", "d7/dbf/a01239.html#form-field-editor", [
          [ "Form Line Type Specifiers", "d7/dbf/a01239.html#form-line-type-specifiers", null ],
          [ "Form Field Delimiters", "d7/dbf/a01239.html#form-field-delimiters", null ],
          [ "Form Data Types", "d7/dbf/a01239.html#form-data-types", null ],
          [ "Form Line Syntax", "d7/dbf/a01239.html#form-line-syntax", null ],
          [ "Form Options", "d7/dbf/a01239.html#form-options", null ]
        ] ]
      ] ],
      [ "C-Menu Pick", "d7/dbf/a01239.html#c-menu-pick", [
        [ "Pick Usage", "d7/dbf/a01239.html#pick-usage", [
          [ "Selecting Items", "d7/dbf/a01239.html#selecting-items", null ]
        ] ],
        [ "Pick Options", "d7/dbf/a01239.html#pick-options", null ]
      ] ],
      [ "C-Menu View", "d7/dbf/a01239.html#c-menu-view", [
        [ "View Options", "d7/dbf/a01239.html#view-options", [
          [ "View Navigation", "d7/dbf/a01239.html#view-navigation", null ],
          [ "Searching Forward", "d7/dbf/a01239.html#searching-forward", null ],
          [ "Searching Backward", "d7/dbf/a01239.html#searching-backward", null ],
          [ "Horizontal Scrolling", "d7/dbf/a01239.html#horizontal-scrolling", null ],
          [ "Motion Keys", "d7/dbf/a01239.html#motion-keys", null ]
        ] ],
        [ "C-Menu Options", "d7/dbf/a01239.html#c-menu-options", null ],
        [ "C-Menu configuration file example", "d7/dbf/a01239.html#c-menu-configuration-file-example", null ],
        [ "lf", "d7/dbf/a01239.html#lf", null ],
        [ "whence", "d7/dbf/a01239.html#whence", null ]
      ] ],
      [ "Troubleshooting", "d7/dbf/a01239.html#troubleshooting", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d7/dbf/a01239.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
    ] ],
    [ "Changelog", "d5/d6e/a01240.html", [
      [ "[Released] - 2026-02-04", "d5/d6e/a01240.html#released---2026-02-04", [
        [ "Fixed", "d5/d6e/a01240.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d5/d6e/a01240.html#autotoc_md028--2026-02-04", [
        [ "Added", "d5/d6e/a01240.html#added", null ]
      ] ]
    ] ],
    [ "EXERCISES", "d3/d07/a01241.html", [
      [ "Exercise 1: System Configurations", "d3/d07/a01241.html#exercise-1-system-configurations", [
        [ "SDDM Background Configuration", "d3/d07/a01241.html#sddm-background-configuration", [
          [ "Requisites", "d3/d07/a01241.html#requisites", null ]
        ] ],
        [ "Ghostty Configuration", "d3/d07/a01241.html#ghostty-configuration", null ],
        [ "Alacritty and Kitty", "d3/d07/a01241.html#alacritty-and-kitty", null ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d3/d07/a01241.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
    ] ],
    [ "Augmenting C-Menu", "d7/dc5/a01242.html", [
      [ "Get C-Menu on Github", "d7/dc5/a01242.html#get-c-menu-on-github-2", null ],
      [ "Table of Contents", "d7/dc5/a01242.html#table-of-contents-1", null ],
      [ "Introduction", "d7/dc5/a01242.html#introduction-2", null ],
      [ "Installing Rust", "d7/dc5/a01242.html#installing-rust", [
        [ "Installing Rust On Linux and macOS", "d7/dc5/a01242.html#installing-rust-on-linux-and-macos", null ]
      ] ],
      [ "About C-Menu and R-Menu", "d7/dc5/a01242.html#about-c-menu-and-r-menu", null ],
      [ "Installing Bat", "d7/dc5/a01242.html#installing-bat", [
        [ "Bat On Linux", "d7/dc5/a01242.html#bat-on-linux", null ],
        [ "Bat On macOS", "d7/dc5/a01242.html#bat-on-macos", null ],
        [ "Bat On Windows", "d7/dc5/a01242.html#bat-on-windows", null ]
      ] ],
      [ "Installing Ripgrep", "d7/dc5/a01242.html#installing-ripgrep", [
        [ "Ripgrep On Linux", "d7/dc5/a01242.html#ripgrep-on-linux", null ],
        [ "Ripgrep On macOS", "d7/dc5/a01242.html#ripgrep-on-macos", null ],
        [ "Ripgrep On Windows", "d7/dc5/a01242.html#ripgrep-on-windows", null ]
      ] ],
      [ "lsd", "d7/dc5/a01242.html#lsd", [
        [ "lsd On Linux", "d7/dc5/a01242.html#lsd-on-linux", null ],
        [ "lsd On macOS", "d7/dc5/a01242.html#lsd-on-macos", null ],
        [ "lsd On Windows", "d7/dc5/a01242.html#lsd-on-windows", null ]
      ] ],
      [ "Highlighting", "d7/dc5/a01242.html#highlighting", null ],
      [ "Tree-Sitter", "d7/dc5/a01242.html#tree-sitter", [
        [ "Tree-Sitter On Linux", "d7/dc5/a01242.html#tree-sitter-on-linux", null ],
        [ "Tree-Sitter On macOS", "d7/dc5/a01242.html#tree-sitter-on-macos", null ],
        [ "Tree-Sitter On Windows", "d7/dc5/a01242.html#tree-sitter-on-windows", null ]
      ] ],
      [ "Tree-Sitter-CLI", "d7/dc5/a01242.html#tree-sitter-cli", [
        [ "Tree-Sitter-CLI On Linux", "d7/dc5/a01242.html#tree-sitter-cli-on-linux", null ],
        [ "Tree-Sitter-CLI On macOS", "d7/dc5/a01242.html#tree-sitter-cli-on-macos", null ],
        [ "Tree-Sitter-CLI On Windows", "d7/dc5/a01242.html#tree-sitter-cli-on-windows", null ]
      ] ],
      [ "Tree-Sitter Parsers", "d7/dc5/a01242.html#tree-sitter-parsers", [
        [ "Tree-Sitter Parsers On Linux", "d7/dc5/a01242.html#tree-sitter-parsers-on-linux", null ],
        [ "Tree-Sitter Parsers On macOS", "d7/dc5/a01242.html#tree-sitter-parsers-on-macos", null ],
        [ "Tree-Sitter Parsers On Windows", "d7/dc5/a01242.html#tree-sitter-parsers-on-windows", null ],
        [ "Testing Tree-Sitter", "d7/dc5/a01242.html#testing-tree-sitter", null ]
      ] ],
      [ "Rustlings", "d7/dc5/a01242.html#rustlings", null ],
      [ "Neovim", "d7/dc5/a01242.html#neovim", null ],
      [ "Neovim Configuration", "d7/dc5/a01242.html#neovim-configuration", [
        [ "Custom Highlights", "d7/dc5/a01242.html#custom-highlights", null ],
        [ "Norcalli Colorizer", "d7/dc5/a01242.html#norcalli-colorizer", [
          [ "AI Overview of Developer Norcalli", "d7/dc5/a01242.html#ai-overview-of-developer-norcalli", null ]
        ] ],
        [ "To Install Norcalli's nvim-colorizer.lua", "d7/dc5/a01242.html#to-install-norcallis-nvim-colorizerlua", null ]
      ] ],
      [ "Folke's Snacks.nvim", "d7/dc5/a01242.html#folkes-snacksnvim", null ],
      [ "Neovim Linkage to the C-Menu API", "d7/dc5/a01242.html#neovim-linkage-to-the-c-menu-api", null ],
      [ "Ghostty", "d7/dc5/a01242.html#ghostty", [
        [ "Ghostty On Linux", "d7/dc5/a01242.html#ghostty-on-linux", null ],
        [ "Ghostty On macOS", "d7/dc5/a01242.html#ghostty-on-macos", null ],
        [ "Ghostty On Windows", "d7/dc5/a01242.html#ghostty-on-windows", null ]
      ] ],
      [ "Useful Configurations", "d7/dc5/a01242.html#useful-configurations", [
        [ "Alternate Bash Executable", "d7/dc5/a01242.html#alternate-bash-executable", null ],
        [ "Shell Configuration", "d7/dc5/a01242.html#shell-configuration", null ],
        [ "Customize Your Terminal Emulator", "d7/dc5/a01242.html#customize-your-terminal-emulator", [
          [ "Fonts", "d7/dc5/a01242.html#fonts", null ],
          [ "Example Terminal Configurations", "d7/dc5/a01242.html#example-terminal-configurations", [
            [ "Ghostty Configuration", "d7/dc5/a01242.html#ghostty-configuration-1", null ],
            [ "Kitty Configuration", "d7/dc5/a01242.html#kitty-configuration", null ],
            [ "Alacritty Configuration", "d7/dc5/a01242.html#alacritty-configuration", null ]
          ] ]
        ] ]
      ] ],
      [ "Additional Resources", "d7/dc5/a01242.html#additional-resources", [
        [ "Let's Get Rusty", "d7/dc5/a01242.html#lets-get-rusty", null ],
        [ "Folke", "d7/dc5/a01242.html#folke", null ],
        [ "Other Resources", "d7/dc5/a01242.html#other-resources", null ]
      ] ],
      [ "Conclusion", "d7/dc5/a01242.html#conclusion", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d7/dc5/a01242.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-3", null ]
    ] ],
    [ "Frequently Asked Questions", "d8/db0/a01243.html", [
      [ "Table of Contents", "d8/db0/a01243.html#table-of-contents-2", null ],
      [ "lf is fast, but I rely on find's features", "d8/db0/a01243.html#lf-is-fast-but-i-rely-on-finds-features", null ],
      [ "Can lf match files with multiple suffixes", "d8/db0/a01243.html#can-lf-match-files-with-multiple-suffixes", null ],
      [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc.", "d8/db0/a01243.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
      [ "Sorted lf Output", "d8/db0/a01243.html#sorted-lf-output", null ],
      [ "Multiple Executables", "d8/db0/a01243.html#multiple-executables", null ],
      [ "Static Executables", "d8/db0/a01243.html#static-executables", null ],
      [ "What's the Icon?", "d8/db0/a01243.html#whats-the-icon", null ],
      [ "C-Menu's File Structure", "d8/db0/a01243.html#c-menus-file-structure", null ],
      [ "Some Menu Selections Don't work", "d8/db0/a01243.html#some-menu-selections-dont-work", [
        [ "Visual Aids Soap-box", "d8/db0/a01243.html#visual-aids-soap-box", null ]
      ] ],
      [ "High Precision Math With C-Menu and Gawk", "d8/db0/a01243.html#high-precision-math-with-c-menu-and-gawk", null ],
      [ "TrueColor Support", "d8/db0/a01243.html#truecolor-support", null ],
      [ "Why View Displays Question Marks", "d8/db0/a01243.html#why-view-displays-question-marks", null ],
      [ "View - How to Colorize Manual Pages", "d8/db0/a01243.html#view---how-to-colorize-manual-pages", null ],
      [ "View - How to Colorize HTML Color Codes", "d8/db0/a01243.html#view---how-to-colorize-html-color-codes", null ],
      [ "View - How to Customize Colors", "d8/db0/a01243.html#view---how-to-customize-colors", null ],
      [ "Menu, Form, Pick, and View API", "d8/db0/a01243.html#menu-form-pick-and-view-api", null ],
      [ "View - How to Use Tree-Sitter with View", "d8/db0/a01243.html#view---how-to-use-tree-sitter-with-view", null ],
      [ "Install Tree-Sitter-CLI", "d8/db0/a01243.html#install-tree-sitter-cli", [
        [ "Download From Github", "d8/db0/a01243.html#download-from-github", null ]
      ] ],
      [ "Menu Form - Integrating External Executables", "d8/db0/a01243.html#menu-form---integrating-external-executables", null ],
      [ "Menu - Using the Installment Loan Calculator", "d8/db0/a01243.html#menu---using-the-installment-loan-calculator", null ],
      [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d8/db0/a01243.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
      [ "Menu Form - Field Delimiters", "d8/db0/a01243.html#menu-form---field-delimiters", null ],
      [ "Menu Form - Data Types", "d8/db0/a01243.html#menu-form---data-types", null ],
      [ "Menu - Interprocess Communications", "d8/db0/a01243.html#menu---interprocess-communications", null ],
      [ "Menu - What Happened to Delete by Inode", "d8/db0/a01243.html#menu---what-happened-to-delete-by-inode", null ],
      [ "Pick - Selecting Multiple Files", "d8/db0/a01243.html#pick---selecting-multiple-files", null ],
      [ "Menu lf - Where Are My Header Files?", "d8/db0/a01243.html#menu-lf---where-are-my-header-files", null ],
      [ "View In a Box Window", "d8/db0/a01243.html#view-in-a-box-window", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d8/db0/a01243.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-4", null ]
    ] ],
    [ "Installation Guide", "d4/dd5/a01244.html", [
      [ "Introduction", "d4/dd5/a01244.html#introduction-3", null ],
      [ "C-Menu Binaries for Linux x86_64", "d4/dd5/a01244.html#c-menu-binaries-for-linux-x86_64", null ],
      [ "Build C-Menu from Source", "d4/dd5/a01244.html#build-c-menu-from-source", [
        [ "Finish the installation", "d4/dd5/a01244.html#finish-the-installation", null ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d4/dd5/a01244.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-5", null ]
    ] ],
    [ "A User Interface Toolkit", "d1/d31/a01245.html", [
      [ "Other C-Menu Documents", "d1/d31/a01245.html#other-c-menu-documents", null ],
      [ "Get C-Menu on Github", "d1/d31/a01245.html#get-c-menu-on-github-3", [
        [ "C-Menu Introduction", "d1/d31/a01245.html#c-menu-introduction", null ]
      ] ],
      [ "<b><em>NEW Features</em></b>", "d1/d31/a01245.html#_new-features_", [
        [ "<b><em>NEW View Line Numbering</em></b>", "d1/d31/a01245.html#_new-view-line-numbering_", null ],
        [ "Large Log File in View", "d1/d31/a01245.html#large-log-file-in-view", null ],
        [ "<b><em>New API Integration With Neovim</em></b>", "d1/d31/a01245.html#_new-api-integration-with-neovim_", null ],
        [ "<b><em>New Options for lf</em></b>", "d1/d31/a01245.html#_new-options-for-lf_", null ]
      ] ],
      [ "C-Menu Exercises", "d1/d31/a01245.html#c-menu-exercises", null ],
      [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "d1/d31/a01245.html#menu-form-pick-view-c-keys-rsh-and-lf", [
        [ "C-Menu API", "d1/d31/a01245.html#c-menu-api", null ],
        [ "Elements of C-Menu", "d1/d31/a01245.html#elements-of-c-menu", null ],
        [ "Key Features", "d1/d31/a01245.html#key-features", null ],
        [ "Highlights (Pun Intended)", "d1/d31/a01245.html#highlights-pun-intended", null ],
        [ "Just Do It!", "d1/d31/a01245.html#just-do-it", null ],
        [ "Menu", "d1/d31/a01245.html#menu", null ],
        [ "C-Keys - Diagnose Keyboard/Mouse Input", "d1/d31/a01245.html#c-keys---diagnose-keyboardmouse-input", null ],
        [ "Pick - A Picker", "d1/d31/a01245.html#pick---a-picker", null ],
        [ "Form for Data Entry and Editing", "d1/d31/a01245.html#form-for-data-entry-and-editing", null ],
        [ "Form Key Features", "d1/d31/a01245.html#form-key-features", null ],
        [ "Form Data Types", "d1/d31/a01245.html#form-data-types-1", null ],
        [ "Sample Menu Description File", "d1/d31/a01245.html#sample-menu-description-file", null ],
        [ "View", "d1/d31/a01245.html#view", [
          [ "Log File With Editor", "d1/d31/a01245.html#log-file-with-editor", null ],
          [ "Screenshot of the Same File With View", "d1/d31/a01245.html#screenshot-of-the-same-file-with-view", null ]
        ] ],
        [ "View and Color Manual Pages", "d1/d31/a01245.html#view-and-color-manual-pages", null ],
        [ "Example Manual Page Using Editor", "d1/d31/a01245.html#example-manual-page-using-editor", null ],
        [ "Example Manual Page", "d1/d31/a01245.html#example-manual-page", null ],
        [ "Demand Paged Virtual Address Space", "d1/d31/a01245.html#demand-paged-virtual-address-space", null ],
        [ "View - Other Features", "d1/d31/a01245.html#view---other-features", null ],
        [ "3-Channel Gamma Correction", "d1/d31/a01245.html#autotoc_md3-channel-gamma-correction", null ],
        [ "Gray Gamma", "d1/d31/a01245.html#gray-gamma", null ],
        [ "RSH", "d1/d31/a01245.html#rsh", null ],
        [ "Maintaining Security with RSH", "d1/d31/a01245.html#maintaining-security-with-rsh", null ],
        [ "lf - List Files Using Regular Expressions", "d1/d31/a01245.html#lf---list-files-using-regular-expressions", null ]
      ] ],
      [ "Features", "d1/d31/a01245.html#features", null ],
      [ "Configuration", "d1/d31/a01245.html#configuration", null ],
      [ "MIT License", "d1/d31/a01245.html#mit-license", null ]
    ] ],
    [ "C-Menu ROADMAP", "d7/d04/a01246.html", [
      [ "0.3.0 On the Horizon", "d7/d04/a01246.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "d7/d04/a01246.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "d7/d04/a01246.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "d7/d04/a01246.html#autotoc_md029---pre-release", [
        [ "Form", "d7/d04/a01246.html#form", null ],
        [ "Pick", "d7/d04/a01246.html#pick", null ],
        [ "Exercises - Example Use Cases", "d7/d04/a01246.html#exercises---example-use-cases", null ],
        [ "View", "d7/d04/a01246.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "d7/d04/a01246.html#autotoc_md100---initial-release", [
        [ "General", "d7/d04/a01246.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "d7/d04/a01246.html#autotoc_md110---feature-enhancements", [
        [ "General", "d7/d04/a01246.html#general-1", null ]
      ] ]
    ] ],
    [ "Configuration snippets", "dd/d95/a01247.html", [
      [ "Table of Contents", "dd/d95/a01247.html#table-of-contents-3", null ],
      [ "C-Menu Desktop Files", "dd/d95/a01247.html#c-menu-desktop-files", null ],
      [ "C-Menu bashrc Configuration", "dd/d95/a01247.html#c-menu-bashrc-configuration", [
        [ "Shell Logging", "dd/d95/a01247.html#shell-logging", null ],
        [ "Prepend Path", "dd/d95/a01247.html#prepend-path", null ],
        [ "Helpful C-Menu Environment Variables", "dd/d95/a01247.html#helpful-c-menu-environment-variables", null ],
        [ "Security Through Obscurity", "dd/d95/a01247.html#security-through-obscurity", null ],
        [ "RSH Helpers", "dd/d95/a01247.html#rsh-helpers", null ],
        [ "Privilege Indicator Shell Prompts", "dd/d95/a01247.html#privilege-indicator-shell-prompts", null ],
        [ "Terminal and Editor Settings", "dd/d95/a01247.html#terminal-and-editor-settings", null ],
        [ "GDB Debugging Setup", "dd/d95/a01247.html#gdb-debugging-setup", null ],
        [ "If You Can't Stop Typing \"vi\"", "dd/d95/a01247.html#if-you-cant-stop-typing-vi", null ],
        [ "C-Menu Startup with \"mm\"", "dd/d95/a01247.html#c-menu-startup-with-mm", null ],
        [ "Curses Escape Delay", "dd/d95/a01247.html#curses-escape-delay", null ],
        [ "Use lsd instead of ls", "dd/d95/a01247.html#use-lsd-instead-of-ls", null ],
        [ "Locale Settings", "dd/d95/a01247.html#locale-settings", null ],
        [ "System Specific Environment Variables", "dd/d95/a01247.html#system-specific-environment-variables", null ]
      ] ],
      [ "C-Menu Configuration", "dd/d95/a01247.html#c-menu-configuration-1", null ],
      [ "Terminal Configurations", "dd/d95/a01247.html#terminal-configurations", [
        [ "Ghostty", "dd/d95/a01247.html#ghostty-1", null ],
        [ "Kitty", "dd/d95/a01247.html#kitty", null ],
        [ "Alacritty", "dd/d95/a01247.html#alacritty", null ]
      ] ],
      [ "Tree-Sitter", "dd/d95/a01247.html#tree-sitter-1", [
        [ "Tree-Sitter config.json", "dd/d95/a01247.html#tree-sitter-configjson", null ]
      ] ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d2/df3/a01085.html#ga3e61ddee7c9ff9a346d3656d0054615f",
"d7/daf/a01169.html#ab060f790bba470d8b05d16354ef1449d",
"d8/db9/a00725.html#a109cb8d491e7b42b53b2ece262cd213a",
"da/d93/a01084.html#ga07c8d6297f2d3fd2651a507391fd6d2e",
"dd/df1/a01082.html#ga353546f4d99ef7ec908d371187f033de",
"functions_vars_e.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';