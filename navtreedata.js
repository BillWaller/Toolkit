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
    [ "C-Menu README", "index.html", "index" ],
    [ "API", "dd/d6d/a01380.html", [
      [ "How to get C-Menu", "dd/d6d/a01380.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "dd/d6d/a01380.html#get-c-menu-on-github", null ],
        [ "Introduction", "dd/d6d/a01380.html#introduction", null ],
        [ "API Organization", "dd/d6d/a01380.html#api-organization", [
          [ "C-Menu Header Files", "dd/d6d/a01380.html#c-menu-header-files", [
            [ "include/cm.h", "dd/d6d/a01380.html#includecmh", null ],
            [ "include/common.h", "dd/d6d/a01380.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "dd/d6d/a01380.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "dd/d6d/a01380.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "dd/d6d/a01380.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "dd/d6d/a01380.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "dd/d6d/a01380.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "dd/d6d/a01380.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "da/d77/a01381.html", [
      [ "How to get C-Menu", "da/d77/a01381.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "da/d77/a01381.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "da/d77/a01381.html#table-of-contents", null ],
        [ "Introduction", "da/d77/a01381.html#introduction-1", null ],
        [ "Prerequisites", "da/d77/a01381.html#prerequisites", [
          [ "Not Required, But Recommended", "da/d77/a01381.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "da/d77/a01381.html#getting-started", [
          [ "C-Menu Environment Variables", "da/d77/a01381.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "da/d77/a01381.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "da/d77/a01381.html#rsh-safety-features", null ],
          [ "Using RSH", "da/d77/a01381.html#using-rsh", null ],
          [ "RSH - A Use Case", "da/d77/a01381.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "da/d77/a01381.html#starting-c-menu", null ],
        [ "C-Menu configuration", "da/d77/a01381.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "da/d77/a01381.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "da/d77/a01381.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "da/d77/a01381.html#menu-description-file-format", null ],
          [ "Form field editor", "da/d77/a01381.html#form-field-editor", [
            [ "Form Line Type Specifiers", "da/d77/a01381.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "da/d77/a01381.html#form-field-delimiters", null ],
            [ "Form Data Types", "da/d77/a01381.html#form-data-types", null ],
            [ "Form Line Syntax", "da/d77/a01381.html#form-line-syntax", null ],
            [ "Form Options", "da/d77/a01381.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "da/d77/a01381.html#c-menu-pick", [
          [ "Pick Usage", "da/d77/a01381.html#pick-usage", [
            [ "Selecting Items", "da/d77/a01381.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "da/d77/a01381.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "da/d77/a01381.html#c-menu-view", [
          [ "View Options", "da/d77/a01381.html#view-options", [
            [ "View Navigation", "da/d77/a01381.html#view-navigation", null ],
            [ "Searching Forward", "da/d77/a01381.html#searching-forward", null ],
            [ "Searching Backward", "da/d77/a01381.html#searching-backward", null ],
            [ "Horizontal Scrolling", "da/d77/a01381.html#horizontal-scrolling", null ],
            [ "Motion Keys", "da/d77/a01381.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "da/d77/a01381.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "da/d77/a01381.html#c-menu-configuration-file-example", null ],
          [ "lf", "da/d77/a01381.html#lf", null ],
          [ "whence", "da/d77/a01381.html#whence", null ]
        ] ],
        [ "Troubleshooting", "da/d77/a01381.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "da/d77/a01381.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "de/d9d/a01382.html", null ],
    [ "Changelog", "de/dfe/a01383.html", [
      [ "[Released] - 2026-02-04", "de/dfe/a01383.html#released---2026-02-04", [
        [ "Fixed", "de/dfe/a01383.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "de/dfe/a01383.html#autotoc_md028--2026-02-04", [
        [ "Added", "de/dfe/a01383.html#added", null ]
      ] ]
    ] ],
    [ "cmenu", "d7/dde/a01384.html", [
      [ "NAME", "d7/dde/a01384.html#name", null ],
      [ "SYNOPSIS", "d7/dde/a01384.html#synopsis", null ],
      [ "DESCRIPTION", "d7/dde/a01384.html#description", null ],
      [ "OPTIONS", "d7/dde/a01384.html#options", [
        [ "ianchor-autotoc_md20ilinebr", "d7/dde/a01384.html#ianchor-autotoc_md20ilinebr", null ],
        [ "date: June 2026", "d7/dde/a01384.html#date-june-2026", null ],
        [ "GEOMETRY", "d7/dde/a01384.html#geometry", null ],
        [ "CONFIGURATION", "d7/dde/a01384.html#configuration", null ],
        [ "INPUT/OUTPUT", "d7/dde/a01384.html#inputoutput", [
          [ "FILES", "d7/dde/a01384.html#files", null ]
        ] ],
        [ "DIRECTORIES", "d7/dde/a01384.html#directories", null ],
        [ "COMMANDS", "d7/dde/a01384.html#commands", null ],
        [ "THEME", "d7/dde/a01384.html#theme", null ],
        [ "GAMMA", "d7/dde/a01384.html#gamma", null ],
        [ "STANDARD COLORS", "d7/dde/a01384.html#standard-colors", null ]
      ] ],
      [ "EXAMPLES", "d7/dde/a01384.html#examples-1", null ],
      [ "REPORTING BUGS", "d7/dde/a01384.html#reporting-bugs", null ],
      [ "COPYRIGHT", "d7/dde/a01384.html#copyright", null ],
      [ "LICENSE", "d7/dde/a01384.html#license", null ],
      [ "SEE ALSO", "d7/dde/a01384.html#see-also", null ]
    ] ],
    [ "exercises", "df/d68/a01385.html", [
      [ "Table of Contents", "df/d68/a01385.html#table-of-contents-1", [
        [ "Introduction", "df/d68/a01385.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "df/d68/a01385.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "df/d68/a01385.html#sddm-background-configuration", [
            [ "Requisites", "df/d68/a01385.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "df/d68/a01385.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "df/d68/a01385.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "df/d68/a01385.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d3/deb/a01386.html", [
      [ "How to get C-Menu", "d3/deb/a01386.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d3/deb/a01386.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d3/deb/a01386.html#table-of-contents-2", null ],
        [ "Introduction", "d3/deb/a01386.html#introduction-3", null ],
        [ "Installing Rust", "d3/deb/a01386.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d3/deb/a01386.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d3/deb/a01386.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d3/deb/a01386.html#installing-bat", [
          [ "Bat On Linux", "d3/deb/a01386.html#bat-on-linux", null ],
          [ "Bat On macOS", "d3/deb/a01386.html#bat-on-macos", null ],
          [ "Bat On Windows", "d3/deb/a01386.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d3/deb/a01386.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d3/deb/a01386.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d3/deb/a01386.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d3/deb/a01386.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d3/deb/a01386.html#lsd", [
          [ "lsd On Linux", "d3/deb/a01386.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d3/deb/a01386.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d3/deb/a01386.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d3/deb/a01386.html#highlighting", null ],
        [ "Tree-Sitter", "d3/deb/a01386.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d3/deb/a01386.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d3/deb/a01386.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d3/deb/a01386.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d3/deb/a01386.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d3/deb/a01386.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d3/deb/a01386.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d3/deb/a01386.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d3/deb/a01386.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d3/deb/a01386.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d3/deb/a01386.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d3/deb/a01386.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d3/deb/a01386.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d3/deb/a01386.html#rustlings", null ],
        [ "Neovim", "d3/deb/a01386.html#neovim", null ],
        [ "Neovim Configuration", "d3/deb/a01386.html#neovim-configuration", [
          [ "Custom Highlights", "d3/deb/a01386.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d3/deb/a01386.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d3/deb/a01386.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d3/deb/a01386.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d3/deb/a01386.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d3/deb/a01386.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d3/deb/a01386.html#ghostty", [
          [ "Ghostty On Linux", "d3/deb/a01386.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d3/deb/a01386.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d3/deb/a01386.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d3/deb/a01386.html#useful-configurations", [
          [ "Alternate Bash Executable", "d3/deb/a01386.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d3/deb/a01386.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d3/deb/a01386.html#customize-your-terminal-emulator", [
            [ "Fonts", "d3/deb/a01386.html#fonts", null ],
            [ "Example Terminal Configurations", "d3/deb/a01386.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d3/deb/a01386.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d3/deb/a01386.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d3/deb/a01386.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d3/deb/a01386.html#additional-resources", [
          [ "Let's Get Rusty", "d3/deb/a01386.html#lets-get-rusty", null ],
          [ "Folke", "d3/deb/a01386.html#folke", null ],
          [ "Other Resources", "d3/deb/a01386.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d3/deb/a01386.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d3/deb/a01386.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "d9/d40/a01387.html", [
      [ "Table of Contents", "d9/d40/a01387.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "d9/d40/a01387.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "d9/d40/a01387.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "d9/d40/a01387.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "d9/d40/a01387.html#multiple-executables", null ],
        [ "Static Executables", "d9/d40/a01387.html#static-executables", null ],
        [ "What's the Icon?", "d9/d40/a01387.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "d9/d40/a01387.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "d9/d40/a01387.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "d9/d40/a01387.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "d9/d40/a01387.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "d9/d40/a01387.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "d9/d40/a01387.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "d9/d40/a01387.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "d9/d40/a01387.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "d9/d40/a01387.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "d9/d40/a01387.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "d9/d40/a01387.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "d9/d40/a01387.html#install-tree-sitter-cli", [
          [ "Download From Github", "d9/d40/a01387.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "d9/d40/a01387.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "d9/d40/a01387.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d9/d40/a01387.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "d9/d40/a01387.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "d9/d40/a01387.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "d9/d40/a01387.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "d9/d40/a01387.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "d9/d40/a01387.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "d9/d40/a01387.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "d9/d40/a01387.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "C-Menu Form", "d0/d36/a01388.html", null ],
    [ "DATE/TIME CONUNDRUM", "d0/d95/a01389.html", [
      [ "Overview", "d0/d95/a01389.html#overview", null ],
      [ "Correct workaround", "d0/d95/a01389.html#correct-workaround", null ],
      [ "Why the previous results looked contradictory", "d0/d95/a01389.html#why-the-previous-results-looked-contradictory", null ],
      [ "Important note about <span class=\"tt\">gmtime_r()</span>", "d0/d95/a01389.html#important-note-about-gmtime_r", null ],
      [ "Recommended helper", "d0/d95/a01389.html#recommended-helper", null ],
      [ "Revised interpretation of the original test cases", "d0/d95/a01389.html#revised-interpretation-of-the-original-test-cases", null ],
      [ "Original demonstration code", "d0/d95/a01389.html#original-demonstration-code", null ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "d5/d8e/a01390.html", [
      [ "Table of Contents", "d5/d8e/a01390.html#table-of-contents-4", null ],
      [ "Introduction", "d5/d8e/a01390.html#introduction-4", null ],
      [ "C-Menu Previews", "d5/d8e/a01390.html#c-menu-previews", [
        [ "Menu", "d5/d8e/a01390.html#menu", null ],
        [ "Form", "d5/d8e/a01390.html#form", null ],
        [ "Pick - Object Selection", "d5/d8e/a01390.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "d5/d8e/a01390.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "d5/d8e/a01390.html#rsh---a-root-shell-alternative", null ],
        [ "lf - A Regular Expression File Finder", "d5/d8e/a01390.html#lf---a-regular-expression-file-finder", null ]
      ] ],
      [ "API", "d5/d8e/a01390.html#api", [
        [ "Completions in Neovim", "d5/d8e/a01390.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "d5/d8e/a01390.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "d5/d8e/a01390.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "d5/d8e/a01390.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "d5/d8e/a01390.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "d5/d8e/a01390.html#rsh-static-linking", null ],
          [ "Prerequisites", "d5/d8e/a01390.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "d5/d8e/a01390.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "d5/d8e/a01390.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "d5/d8e/a01390.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "d5/d8e/a01390.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "lf", "dc/dbc/a01391.html", [
      [ "NAME", "dc/dbc/a01391.html#name-1", null ],
      [ "SYNOPSIS", "dc/dbc/a01391.html#synopsis-1", null ],
      [ "DESCRIPTION", "dc/dbc/a01391.html#description-1", null ],
      [ "OPTIONS", "dc/dbc/a01391.html#options-1", null ],
      [ "EXAMPLES", "dc/dbc/a01391.html#examples-3", null ],
      [ "REPORTING BUGS", "dc/dbc/a01391.html#reporting-bugs-1", null ],
      [ "COPYRIGHT", "dc/dbc/a01391.html#copyright-1", null ],
      [ "LICENSE", "dc/dbc/a01391.html#license-1", null ],
      [ "SEE ALSO", "dc/dbc/a01391.html#see-also-1", null ]
    ] ],
    [ "man_template", "d1/dcc/a01392.html", [
      [ "NAME", "d1/dcc/a01392.html#name-2", null ],
      [ "SYNOPSIS", "d1/dcc/a01392.html#synopsis-2", null ],
      [ "DESCRIPTION", "d1/dcc/a01392.html#description-2", null ],
      [ "OPTIONS", "d1/dcc/a01392.html#options-2", [
        [ "ianchor-autotoc_md89ilinebr", "d1/dcc/a01392.html#ianchor-autotoc_md89ilinebr", null ],
        [ "date: June 2026", "d1/dcc/a01392.html#date-june-2026-2", null ],
        [ "GEOMETRY", "d1/dcc/a01392.html#geometry-1", null ],
        [ "CONFIGURATION", "d1/dcc/a01392.html#configuration-1", null ],
        [ "INPUT/OUTPUT", "d1/dcc/a01392.html#inputoutput-1", [
          [ "FILES", "d1/dcc/a01392.html#files-1", null ]
        ] ],
        [ "DIRECTORIES", "d1/dcc/a01392.html#directories-1", null ],
        [ "COMMANDS", "d1/dcc/a01392.html#commands-1", null ],
        [ "THEME", "d1/dcc/a01392.html#theme-1", null ],
        [ "GAMMA", "d1/dcc/a01392.html#gamma-1", null ],
        [ "STANDARD COLORS", "d1/dcc/a01392.html#standard-colors-1", null ]
      ] ],
      [ "EXAMPLES", "d1/dcc/a01392.html#examples-4", null ],
      [ "REPORTING BUGS", "d1/dcc/a01392.html#reporting-bugs-2", null ],
      [ "COPYRIGHT", "d1/dcc/a01392.html#copyright-2", null ],
      [ "LICENSE", "d1/dcc/a01392.html#license-2", null ],
      [ "SEE ALSO", "d1/dcc/a01392.html#see-also-2", null ]
    ] ],
    [ "C-Menu Start-up Options", "d3/d92/a01393.html", null ],
    [ "OVERVIEW", "d6/d2f/a01394.html", [
      [ "Table of Contents", "d6/d2f/a01394.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "d6/d2f/a01394.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "d6/d2f/a01394.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "d6/d2f/a01394.html#c-menu-introduction", null ],
          [ "View Line Numbering", "d6/d2f/a01394.html#view-line-numbering", null ],
          [ "Large Log File in View", "d6/d2f/a01394.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "d6/d2f/a01394.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "d6/d2f/a01394.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "d6/d2f/a01394.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "d6/d2f/a01394.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "d6/d2f/a01394.html#c-menu-api", null ],
          [ "Elements of C-Menu", "d6/d2f/a01394.html#elements-of-c-menu", null ],
          [ "Key Features", "d6/d2f/a01394.html#key-features", null ],
          [ "Highlights (Pun Intended)", "d6/d2f/a01394.html#highlights-pun-intended", null ],
          [ "Just Do It", "d6/d2f/a01394.html#just-do-it", null ],
          [ "Menu", "d6/d2f/a01394.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "d6/d2f/a01394.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "d6/d2f/a01394.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "d6/d2f/a01394.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "d6/d2f/a01394.html#form-key-features", null ],
          [ "Form Data Types", "d6/d2f/a01394.html#form-data-types-3", null ],
          [ "Sample Menu Description File", "d6/d2f/a01394.html#sample-menu-description-file", null ],
          [ "View", "d6/d2f/a01394.html#view", [
            [ "Log File With Editor", "d6/d2f/a01394.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "d6/d2f/a01394.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "d6/d2f/a01394.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "d6/d2f/a01394.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "d6/d2f/a01394.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "d6/d2f/a01394.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "d6/d2f/a01394.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "d6/d2f/a01394.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "d6/d2f/a01394.html#gray-gamma", null ],
          [ "RSH", "d6/d2f/a01394.html#rsh", null ],
          [ "Maintaining Security with RSH", "d6/d2f/a01394.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "d6/d2f/a01394.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "d6/d2f/a01394.html#features", null ],
        [ "Configuration", "d6/d2f/a01394.html#configuration-2", null ],
        [ "MIT License", "d6/d2f/a01394.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "d2/df5/a01395.html", [
      [ "Design Philosophy and Optimizations", "d2/df5/a01395.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "d2/df5/a01395.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu Pick", "d9/d45/a01396.html", null ],
    [ "C-Menu README", "d7/d1c/a01397.html", [
      [ "New Features for lf", "d7/d1c/a01397.html#new-features-for-lf", [
        [ "Installment Loan Calculator - Built with C-Menu", "d7/d1c/a01397.html#installment-loan-calculator---built-with-c-menu", null ]
      ] ],
      [ "C-Menu Introduction", "d7/d1c/a01397.html#c-menu-introduction-1", null ],
      [ "Table of Contents", "d7/d1c/a01397.html#table-of-contents-6", null ],
      [ "Why C-Menu", "d7/d1c/a01397.html#why-c-menu", null ],
      [ "Components", "d7/d1c/a01397.html#components", null ],
      [ "Quick Start", "d7/d1c/a01397.html#quick-start", null ],
      [ "Core Concepts", "d7/d1c/a01397.html#core-concepts", null ],
      [ "Examples", "d7/d1c/a01397.html#examples-5", [
        [ "Menu", "d7/d1c/a01397.html#menu-2", null ],
        [ "Form", "d7/d1c/a01397.html#form-1", null ],
        [ "Pick", "d7/d1c/a01397.html#pick", null ],
        [ "View", "d7/d1c/a01397.html#view-1", null ],
        [ "lf", "d7/d1c/a01397.html#lf-1", null ],
        [ "rsh", "d7/d1c/a01397.html#rsh-1", null ]
      ] ],
      [ "Documentation", "d7/d1c/a01397.html#documentation-1", null ],
      [ "Configuration", "d7/d1c/a01397.html#configuration-3", null ],
      [ "Platform and Requirements", "d7/d1c/a01397.html#platform-and-requirements", null ],
      [ "Security Notes", "d7/d1c/a01397.html#security-notes", null ],
      [ "Why the Design Works", "d7/d1c/a01397.html#why-the-design-works", null ],
      [ "Contributing", "d7/d1c/a01397.html#contributing", null ]
    ] ],
    [ "C-Menu ROADMAP", "da/de3/a01398.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "da/de3/a01398.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "da/de3/a01398.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "da/de3/a01398.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "da/de3/a01398.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "da/de3/a01398.html#autotoc_md029---pre-release", [
        [ "Form", "da/de3/a01398.html#form-2", null ],
        [ "Pick", "da/de3/a01398.html#pick-1", null ],
        [ "Exercises - Example Use Cases", "da/de3/a01398.html#exercises---example-use-cases", null ],
        [ "View", "da/de3/a01398.html#view-2", null ]
      ] ],
      [ "1.0.0 - Initial Release", "da/de3/a01398.html#autotoc_md100---initial-release", [
        [ "General", "da/de3/a01398.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "da/de3/a01398.html#autotoc_md110---feature-enhancements", [
        [ "General", "da/de3/a01398.html#general-1", null ]
      ] ]
    ] ],
    [ "rsh", "d6/d64/a01399.html", [
      [ "NAME", "d6/d64/a01399.html#name-3", null ],
      [ "SYNOPSIS", "d6/d64/a01399.html#synopsis-3", null ],
      [ "DESCRIPTION", "d6/d64/a01399.html#description-3", null ],
      [ "NOTE", "d6/d64/a01399.html#note", null ],
      [ "ROOT AUTHORITY", "d6/d64/a01399.html#root-authority", null ],
      [ "MAINTAINING SECURITY WITH RSH", "d6/d64/a01399.html#maintaining-security-with-rsh-1", null ],
      [ "BEST PRACTICES FOR USING RSH", "d6/d64/a01399.html#best-practices-for-using-rsh", null ],
      [ "RESTRICT ACCESS TO RSH", "d6/d64/a01399.html#restrict-access-to-rsh", null ],
      [ "MONITOR RSH USAGE", "d6/d64/a01399.html#monitor-rsh-usage", null ],
      [ "PAM", "d6/d64/a01399.html#pam", null ],
      [ "USAGE", "d6/d64/a01399.html#usage", null ],
      [ "OPTIONS", "d6/d64/a01399.html#options-3", null ],
      [ "EXAMPLES", "d6/d64/a01399.html#examples-6", null ],
      [ "REPORTING BUGS", "d6/d64/a01399.html#reporting-bugs-3", null ],
      [ "COPYRIGHT", "d6/d64/a01399.html#copyright-3", null ],
      [ "LICENSE", "d6/d64/a01399.html#license-3", null ],
      [ "SEE ALSO", "d6/d64/a01399.html#see-also-3", null ]
    ] ],
    [ "snippets", "dc/d35/a01400.html", [
      [ "Table of Contents", "dc/d35/a01400.html#table-of-contents-7", [
        [ "C-Menu Desktop Files", "dc/d35/a01400.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "dc/d35/a01400.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "dc/d35/a01400.html#shell-logging", null ],
          [ "Prepend Path", "dc/d35/a01400.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "dc/d35/a01400.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "dc/d35/a01400.html#security-through-obscurity", null ],
          [ "RSH Helpers", "dc/d35/a01400.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "dc/d35/a01400.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "dc/d35/a01400.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "dc/d35/a01400.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "dc/d35/a01400.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "dc/d35/a01400.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "dc/d35/a01400.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "dc/d35/a01400.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "dc/d35/a01400.html#locale-settings", null ],
          [ "System Specific Environment Variables", "dc/d35/a01400.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "dc/d35/a01400.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "dc/d35/a01400.html#terminal-configurations", [
          [ "Ghostty", "dc/d35/a01400.html#ghostty-1", null ],
          [ "Kitty", "dc/d35/a01400.html#kitty", null ],
          [ "Alacritty", "dc/d35/a01400.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "dc/d35/a01400.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "dc/d35/a01400.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "dc/df4/a01401.html", [
      [ "Background", "dc/df4/a01401.html#background", null ],
      [ "Suppression File", "dc/df4/a01401.html#suppression-file", null ],
      [ "How to Run", "dc/df4/a01401.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "dc/df4/a01401.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "dc/df4/a01401.html#running-manually", null ]
      ] ],
      [ "Expected Output", "dc/df4/a01401.html#expected-output", null ],
      [ "Reference", "dc/df4/a01401.html#reference", null ]
    ] ],
    [ "C-Menu View", "d0/dc7/a01402.html", [
      [ "RSH - A Root Shell Alternative", "d0/dc7/a01402.html#rsh---a-root-shell-alternative-1", null ],
      [ "lf - A Regular Expression File Finder", "d0/dc7/a01402.html#lf---a-regular-expression-file-finder-1", null ]
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
"d3/d42/a01275.html#a6f4f208b3e6b0e4bb3f44032cd89108a",
"d5/dad/a01207.html#a4b534d3d9a37c5b798dcf43186b8569e",
"d7/daf/a01169.html#af907ff1bb99a37ff55577d5f1064349a",
"d8/db9/a00725.html#acca5f1a5d62dd9e39a1a1b2b1acfa737",
"da/d20/a01160_source.html",
"dd/d42/a01259.html#a60b72490d18fdef61b248341087d39ed",
"de/df1/a01151.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';