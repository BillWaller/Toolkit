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
    [ "C-Menu - A User Interface Toolkit", "index.html", "index" ],
    [ "API", "d7/d51/a01340.html", [
      [ "How to get C-Menu", "d7/d51/a01340.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "d7/d51/a01340.html#get-c-menu-on-github", null ],
        [ "Introduction", "d7/d51/a01340.html#introduction", null ],
        [ "API Organization", "d7/d51/a01340.html#api-organization", [
          [ "C-Menu Header Files", "d7/d51/a01340.html#c-menu-header-files", [
            [ "include/cm.h", "d7/d51/a01340.html#includecmh", null ],
            [ "include/common.h", "d7/d51/a01340.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "d7/d51/a01340.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "d7/d51/a01340.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "d7/d51/a01340.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "d7/d51/a01340.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "d7/d51/a01340.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d7/d51/a01340.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "de/da0/a01341.html", [
      [ "How to get C-Menu", "de/da0/a01341.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "de/da0/a01341.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "de/da0/a01341.html#table-of-contents", null ],
        [ "Introduction", "de/da0/a01341.html#introduction-1", null ],
        [ "Prerequisites", "de/da0/a01341.html#prerequisites", [
          [ "Not Required, But Recommended", "de/da0/a01341.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "de/da0/a01341.html#getting-started", [
          [ "C-Menu Environment Variables", "de/da0/a01341.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "de/da0/a01341.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "de/da0/a01341.html#rsh-safety-features", null ],
          [ "Using RSH", "de/da0/a01341.html#using-rsh", null ],
          [ "RSH - A Use Case", "de/da0/a01341.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "de/da0/a01341.html#starting-c-menu", null ],
        [ "C-Menu configuration", "de/da0/a01341.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "de/da0/a01341.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "de/da0/a01341.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "de/da0/a01341.html#menu-description-file-format", null ],
          [ "Form field editor", "de/da0/a01341.html#form-field-editor", [
            [ "Form Line Type Specifiers", "de/da0/a01341.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "de/da0/a01341.html#form-field-delimiters", null ],
            [ "Form Data Types", "de/da0/a01341.html#form-data-types", null ],
            [ "Form Line Syntax", "de/da0/a01341.html#form-line-syntax", null ],
            [ "Form Options", "de/da0/a01341.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "de/da0/a01341.html#c-menu-pick", [
          [ "Pick Usage", "de/da0/a01341.html#pick-usage", [
            [ "Selecting Items", "de/da0/a01341.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "de/da0/a01341.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "de/da0/a01341.html#c-menu-view", [
          [ "View Options", "de/da0/a01341.html#view-options", [
            [ "View Navigation", "de/da0/a01341.html#view-navigation", null ],
            [ "Searching Forward", "de/da0/a01341.html#searching-forward", null ],
            [ "Searching Backward", "de/da0/a01341.html#searching-backward", null ],
            [ "Horizontal Scrolling", "de/da0/a01341.html#horizontal-scrolling", null ],
            [ "Motion Keys", "de/da0/a01341.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "de/da0/a01341.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "de/da0/a01341.html#c-menu-configuration-file-example", null ],
          [ "lf", "de/da0/a01341.html#lf", null ],
          [ "whence", "de/da0/a01341.html#whence", null ]
        ] ],
        [ "Troubleshooting", "de/da0/a01341.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "de/da0/a01341.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "d5/da0/a01342.html", null ],
    [ "Changelog", "d3/da4/a01343.html", [
      [ "[Released] - 2026-02-04", "d3/da4/a01343.html#released---2026-02-04", [
        [ "Fixed", "d3/da4/a01343.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d3/da4/a01343.html#autotoc_md028--2026-02-04", [
        [ "Added", "d3/da4/a01343.html#added", null ]
      ] ]
    ] ],
    [ "exercises", "dc/d54/a01344.html", [
      [ "Table of Contents", "dc/d54/a01344.html#table-of-contents-1", [
        [ "Introduction", "dc/d54/a01344.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "dc/d54/a01344.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "dc/d54/a01344.html#sddm-background-configuration", [
            [ "Requisites", "dc/d54/a01344.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "dc/d54/a01344.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "dc/d54/a01344.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "dc/d54/a01344.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d4/deb/a01345.html", [
      [ "How to get C-Menu", "d4/deb/a01345.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d4/deb/a01345.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d4/deb/a01345.html#table-of-contents-2", null ],
        [ "Introduction", "d4/deb/a01345.html#introduction-3", null ],
        [ "Installing Rust", "d4/deb/a01345.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d4/deb/a01345.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d4/deb/a01345.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d4/deb/a01345.html#installing-bat", [
          [ "Bat On Linux", "d4/deb/a01345.html#bat-on-linux", null ],
          [ "Bat On macOS", "d4/deb/a01345.html#bat-on-macos", null ],
          [ "Bat On Windows", "d4/deb/a01345.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d4/deb/a01345.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d4/deb/a01345.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d4/deb/a01345.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d4/deb/a01345.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d4/deb/a01345.html#lsd", [
          [ "lsd On Linux", "d4/deb/a01345.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d4/deb/a01345.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d4/deb/a01345.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d4/deb/a01345.html#highlighting", null ],
        [ "Tree-Sitter", "d4/deb/a01345.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d4/deb/a01345.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d4/deb/a01345.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d4/deb/a01345.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d4/deb/a01345.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d4/deb/a01345.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d4/deb/a01345.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d4/deb/a01345.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d4/deb/a01345.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d4/deb/a01345.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d4/deb/a01345.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d4/deb/a01345.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d4/deb/a01345.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d4/deb/a01345.html#rustlings", null ],
        [ "Neovim", "d4/deb/a01345.html#neovim", null ],
        [ "Neovim Configuration", "d4/deb/a01345.html#neovim-configuration", [
          [ "Custom Highlights", "d4/deb/a01345.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d4/deb/a01345.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d4/deb/a01345.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d4/deb/a01345.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d4/deb/a01345.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d4/deb/a01345.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d4/deb/a01345.html#ghostty", [
          [ "Ghostty On Linux", "d4/deb/a01345.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d4/deb/a01345.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d4/deb/a01345.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d4/deb/a01345.html#useful-configurations", [
          [ "Alternate Bash Executable", "d4/deb/a01345.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d4/deb/a01345.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d4/deb/a01345.html#customize-your-terminal-emulator", [
            [ "Fonts", "d4/deb/a01345.html#fonts", null ],
            [ "Example Terminal Configurations", "d4/deb/a01345.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d4/deb/a01345.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d4/deb/a01345.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d4/deb/a01345.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d4/deb/a01345.html#additional-resources", [
          [ "Let's Get Rusty", "d4/deb/a01345.html#lets-get-rusty", null ],
          [ "Folke", "d4/deb/a01345.html#folke", null ],
          [ "Other Resources", "d4/deb/a01345.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d4/deb/a01345.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d4/deb/a01345.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "d9/de4/a01346.html", [
      [ "Table of Contents", "d9/de4/a01346.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "d9/de4/a01346.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "d9/de4/a01346.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "d9/de4/a01346.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "d9/de4/a01346.html#multiple-executables", null ],
        [ "Static Executables", "d9/de4/a01346.html#static-executables", null ],
        [ "What's the Icon?", "d9/de4/a01346.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "d9/de4/a01346.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "d9/de4/a01346.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "d9/de4/a01346.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "d9/de4/a01346.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "d9/de4/a01346.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "d9/de4/a01346.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "d9/de4/a01346.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "d9/de4/a01346.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "d9/de4/a01346.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "d9/de4/a01346.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "d9/de4/a01346.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "d9/de4/a01346.html#install-tree-sitter-cli", [
          [ "Download From Github", "d9/de4/a01346.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "d9/de4/a01346.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "d9/de4/a01346.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d9/de4/a01346.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "d9/de4/a01346.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "d9/de4/a01346.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "d9/de4/a01346.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "d9/de4/a01346.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "d9/de4/a01346.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "d9/de4/a01346.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "d9/de4/a01346.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "df/d96/a01347.html", [
      [ "Table of Contents", "df/d96/a01347.html#table-of-contents-4", null ],
      [ "Introduction", "df/d96/a01347.html#introduction-4", null ],
      [ "C-Menu Previews", "df/d96/a01347.html#c-menu-previews", [
        [ "Menu", "df/d96/a01347.html#menu", null ],
        [ "Form", "df/d96/a01347.html#form", null ],
        [ "Pick - Object Selection", "df/d96/a01347.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "df/d96/a01347.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "df/d96/a01347.html#rsh---a-root-shell-alternative-1", null ],
        [ "lf - A Regular Expression File Finder", "df/d96/a01347.html#lf---a-regular-expression-file-finder-1", null ]
      ] ],
      [ "API", "df/d96/a01347.html#api", [
        [ "Completions in Neovim", "df/d96/a01347.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "df/d96/a01347.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "df/d96/a01347.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "df/d96/a01347.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "df/d96/a01347.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "df/d96/a01347.html#rsh-static-linking", null ],
          [ "Prerequisites", "df/d96/a01347.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "df/d96/a01347.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "df/d96/a01347.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "df/d96/a01347.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "df/d96/a01347.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "OVERVIEW", "d7/d57/a01348.html", [
      [ "Table of Contents", "d7/d57/a01348.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "d7/d57/a01348.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "d7/d57/a01348.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "d7/d57/a01348.html#c-menu-introduction", null ]
        ] ],
        [ "<b><em>NEW Features</em></b>", "d7/d57/a01348.html#_new-features_", [
          [ "<b><em>NEW View Line Numbering</em></b>", "d7/d57/a01348.html#_new-view-line-numbering_", null ],
          [ "Large Log File in View", "d7/d57/a01348.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "d7/d57/a01348.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "d7/d57/a01348.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "d7/d57/a01348.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "d7/d57/a01348.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "d7/d57/a01348.html#c-menu-api", null ],
          [ "Elements of C-Menu", "d7/d57/a01348.html#elements-of-c-menu", null ],
          [ "Key Features", "d7/d57/a01348.html#key-features", null ],
          [ "Highlights (Pun Intended)", "d7/d57/a01348.html#highlights-pun-intended", null ],
          [ "Just Do It", "d7/d57/a01348.html#just-do-it", null ],
          [ "Menu", "d7/d57/a01348.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "d7/d57/a01348.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "d7/d57/a01348.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "d7/d57/a01348.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "d7/d57/a01348.html#form-key-features", null ],
          [ "Form Data Types", "d7/d57/a01348.html#form-data-types-1", null ],
          [ "Sample Menu Description File", "d7/d57/a01348.html#sample-menu-description-file", null ],
          [ "View", "d7/d57/a01348.html#view", [
            [ "Log File With Editor", "d7/d57/a01348.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "d7/d57/a01348.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "d7/d57/a01348.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "d7/d57/a01348.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "d7/d57/a01348.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "d7/d57/a01348.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "d7/d57/a01348.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "d7/d57/a01348.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "d7/d57/a01348.html#gray-gamma", null ],
          [ "RSH", "d7/d57/a01348.html#rsh", null ],
          [ "Maintaining Security with RSH", "d7/d57/a01348.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "d7/d57/a01348.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "d7/d57/a01348.html#features", null ],
        [ "Configuration", "d7/d57/a01348.html#configuration", null ],
        [ "MIT License", "d7/d57/a01348.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "de/d6c/a01349.html", [
      [ "Design Philosophy and Optimizations", "de/d6c/a01349.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "de/d6c/a01349.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu ROADMAP", "da/d61/a01350.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "da/d61/a01350.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "da/d61/a01350.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "da/d61/a01350.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "da/d61/a01350.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "da/d61/a01350.html#autotoc_md029---pre-release", [
        [ "Form", "da/d61/a01350.html#form-1", null ],
        [ "Pick", "da/d61/a01350.html#pick", null ],
        [ "Exercises - Example Use Cases", "da/d61/a01350.html#exercises---example-use-cases", null ],
        [ "View", "da/d61/a01350.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "da/d61/a01350.html#autotoc_md100---initial-release", [
        [ "General", "da/d61/a01350.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "da/d61/a01350.html#autotoc_md110---feature-enhancements", [
        [ "General", "da/d61/a01350.html#general-1", null ]
      ] ]
    ] ],
    [ "snippets", "d1/dcd/a01351.html", [
      [ "Table of Contents", "d1/dcd/a01351.html#table-of-contents-6", [
        [ "C-Menu Desktop Files", "d1/dcd/a01351.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "d1/dcd/a01351.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "d1/dcd/a01351.html#shell-logging", null ],
          [ "Prepend Path", "d1/dcd/a01351.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "d1/dcd/a01351.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "d1/dcd/a01351.html#security-through-obscurity", null ],
          [ "RSH Helpers", "d1/dcd/a01351.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "d1/dcd/a01351.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "d1/dcd/a01351.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "d1/dcd/a01351.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "d1/dcd/a01351.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "d1/dcd/a01351.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "d1/dcd/a01351.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "d1/dcd/a01351.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "d1/dcd/a01351.html#locale-settings", null ],
          [ "System Specific Environment Variables", "d1/dcd/a01351.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "d1/dcd/a01351.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "d1/dcd/a01351.html#terminal-configurations", [
          [ "Ghostty", "d1/dcd/a01351.html#ghostty-1", null ],
          [ "Kitty", "d1/dcd/a01351.html#kitty", null ],
          [ "Alacritty", "d1/dcd/a01351.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "d1/dcd/a01351.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "d1/dcd/a01351.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "d0/d85/a01352.html", [
      [ "Background", "d0/d85/a01352.html#background", null ],
      [ "Suppression File", "d0/d85/a01352.html#suppression-file", null ],
      [ "How to Run", "d0/d85/a01352.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "d0/d85/a01352.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "d0/d85/a01352.html#running-manually", null ]
      ] ],
      [ "Expected Output", "d0/d85/a01352.html#expected-output", null ],
      [ "Reference", "d0/d85/a01352.html#reference", null ]
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
"d4/deb/a01345.html#bat-on-windows",
"d6/dc0/a00734.html#af2dd70d8b95c32fb670ac6f9cc8df201",
"d8/db9/a00725.html#a518c63d1d53a636e68ed360015d81207",
"d9/d5b/a01127.html#a964fa61be5e30597c14ae6b1e24a7994a868fc405cf495f2b0b8a939b4c471d80",
"dd/d95/a01247.html#a7906e9353c8042af2eff087719123eea",
"de/da0/a01341.html#menu-description-file-format",
"globals_type.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';