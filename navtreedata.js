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
    [ "API", "d7/d68/a01413.html", [
      [ "How to get C-Menu", "d7/d68/a01413.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "d7/d68/a01413.html#get-c-menu-on-github", null ],
        [ "Introduction", "d7/d68/a01413.html#introduction", null ],
        [ "API Organization", "d7/d68/a01413.html#api-organization", [
          [ "C-Menu Header Files", "d7/d68/a01413.html#c-menu-header-files", [
            [ "include/cm.h", "d7/d68/a01413.html#includecmh", null ],
            [ "include/common.h", "d7/d68/a01413.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "d7/d68/a01413.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "d7/d68/a01413.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "d7/d68/a01413.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "d7/d68/a01413.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "d7/d68/a01413.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d7/d68/a01413.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "d8/df1/a01414.html", [
      [ "How to get C-Menu", "d8/df1/a01414.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "d8/df1/a01414.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "d8/df1/a01414.html#table-of-contents", null ],
        [ "Introduction", "d8/df1/a01414.html#introduction-1", null ],
        [ "Prerequisites", "d8/df1/a01414.html#prerequisites", [
          [ "Not Required, But Recommended", "d8/df1/a01414.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "d8/df1/a01414.html#getting-started", [
          [ "C-Menu Environment Variables", "d8/df1/a01414.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "d8/df1/a01414.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "d8/df1/a01414.html#rsh-safety-features", null ],
          [ "Using RSH", "d8/df1/a01414.html#using-rsh", null ],
          [ "RSH - A Use Case", "d8/df1/a01414.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "d8/df1/a01414.html#starting-c-menu", null ],
        [ "C-Menu configuration", "d8/df1/a01414.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "d8/df1/a01414.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "d8/df1/a01414.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "d8/df1/a01414.html#menu-description-file-format", null ],
          [ "Form field editor", "d8/df1/a01414.html#form-field-editor", [
            [ "Form Line Type Specifiers", "d8/df1/a01414.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "d8/df1/a01414.html#form-field-delimiters", null ],
            [ "Form Data Types", "d8/df1/a01414.html#form-data-types", null ],
            [ "Form Line Syntax", "d8/df1/a01414.html#form-line-syntax", null ],
            [ "Form Options", "d8/df1/a01414.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "d8/df1/a01414.html#c-menu-pick", [
          [ "Pick Usage", "d8/df1/a01414.html#pick-usage", [
            [ "Selecting Items", "d8/df1/a01414.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "d8/df1/a01414.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "d8/df1/a01414.html#c-menu-view", [
          [ "View Options", "d8/df1/a01414.html#view-options", [
            [ "View Navigation", "d8/df1/a01414.html#view-navigation", null ],
            [ "Searching Forward", "d8/df1/a01414.html#searching-forward", null ],
            [ "Searching Backward", "d8/df1/a01414.html#searching-backward", null ],
            [ "Horizontal Scrolling", "d8/df1/a01414.html#horizontal-scrolling", null ],
            [ "Motion Keys", "d8/df1/a01414.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "d8/df1/a01414.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "d8/df1/a01414.html#c-menu-configuration-file-example", null ],
          [ "lf", "d8/df1/a01414.html#lf", null ],
          [ "whence", "d8/df1/a01414.html#whence", null ]
        ] ],
        [ "Troubleshooting", "d8/df1/a01414.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "d8/df1/a01414.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "de/d70/a01415.html", null ],
    [ "Changelog", "d5/dec/a01416.html", [
      [ "[Released] - 2026-02-04", "d5/dec/a01416.html#released---2026-02-04", [
        [ "Fixed", "d5/dec/a01416.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d5/dec/a01416.html#autotoc_md028--2026-02-04", [
        [ "Added", "d5/dec/a01416.html#added", null ]
      ] ]
    ] ],
    [ "cmenu", "de/daf/a01417.html", [
      [ "NAME C-Menu Application Builder", "de/daf/a01417.html#name-c-menu-application-builder", null ],
      [ "SYNOPSIS", "de/daf/a01417.html#synopsis", null ],
      [ "DESCRIPTION", "de/daf/a01417.html#description", null ],
      [ "ANCILLARY COMPONENTS", "de/daf/a01417.html#ancillary-components", null ],
      [ "OPTIONS", "de/daf/a01417.html#options", [
        [ "ianchor-autotoc_md20ilinebr", "de/daf/a01417.html#ianchor-autotoc_md20ilinebr", null ],
        [ "date: June 2026", "de/daf/a01417.html#date-june-2026", null ],
        [ "THEME", "de/daf/a01417.html#theme", null ],
        [ "GAMMA", "de/daf/a01417.html#gamma", null ],
        [ "STANDARD COLORS", "de/daf/a01417.html#standard-colors", null ]
      ] ],
      [ "FUNCTION CALL VS DIRECT EXECUTION VS SHELL", "de/daf/a01417.html#function-call-vs-direct-execution-vs-shell", null ],
      [ "EXAMPLES", "de/daf/a01417.html#examples-1", null ],
      [ "CMENU MENU COMMAND SYNTAX", "de/daf/a01417.html#cmenu-menu-command-syntax", null ],
      [ "COPYRIGHT", "de/daf/a01417.html#copyright", null ],
      [ "LICENSE", "de/daf/a01417.html#license", null ],
      [ "EXAMPLES", "de/daf/a01417.html#examples-2", null ],
      [ "SEE ALSO", "de/daf/a01417.html#see-also", null ]
    ] ],
    [ "exercises", "d4/d3c/a01418.html", [
      [ "Table of Contents", "d4/d3c/a01418.html#table-of-contents-1", [
        [ "Introduction", "d4/d3c/a01418.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "d4/d3c/a01418.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "d4/d3c/a01418.html#sddm-background-configuration", [
            [ "Requisites", "d4/d3c/a01418.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "d4/d3c/a01418.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "d4/d3c/a01418.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "d4/d3c/a01418.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d0/d7d/a01419.html", [
      [ "How to get C-Menu", "d0/d7d/a01419.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d0/d7d/a01419.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d0/d7d/a01419.html#table-of-contents-2", null ],
        [ "Introduction", "d0/d7d/a01419.html#introduction-3", null ],
        [ "Installing Rust", "d0/d7d/a01419.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d0/d7d/a01419.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d0/d7d/a01419.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d0/d7d/a01419.html#installing-bat", [
          [ "Bat On Linux", "d0/d7d/a01419.html#bat-on-linux", null ],
          [ "Bat On macOS", "d0/d7d/a01419.html#bat-on-macos", null ],
          [ "Bat On Windows", "d0/d7d/a01419.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d0/d7d/a01419.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d0/d7d/a01419.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d0/d7d/a01419.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d0/d7d/a01419.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d0/d7d/a01419.html#lsd", [
          [ "lsd On Linux", "d0/d7d/a01419.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d0/d7d/a01419.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d0/d7d/a01419.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d0/d7d/a01419.html#highlighting", null ],
        [ "Tree-Sitter", "d0/d7d/a01419.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d0/d7d/a01419.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d0/d7d/a01419.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d0/d7d/a01419.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d0/d7d/a01419.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d0/d7d/a01419.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d0/d7d/a01419.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d0/d7d/a01419.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d0/d7d/a01419.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d0/d7d/a01419.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d0/d7d/a01419.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d0/d7d/a01419.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d0/d7d/a01419.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d0/d7d/a01419.html#rustlings", null ],
        [ "Neovim", "d0/d7d/a01419.html#neovim", null ],
        [ "Neovim Configuration", "d0/d7d/a01419.html#neovim-configuration", [
          [ "Custom Highlights", "d0/d7d/a01419.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d0/d7d/a01419.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d0/d7d/a01419.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d0/d7d/a01419.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d0/d7d/a01419.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d0/d7d/a01419.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d0/d7d/a01419.html#ghostty", [
          [ "Ghostty On Linux", "d0/d7d/a01419.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d0/d7d/a01419.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d0/d7d/a01419.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d0/d7d/a01419.html#useful-configurations", [
          [ "Alternate Bash Executable", "d0/d7d/a01419.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d0/d7d/a01419.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d0/d7d/a01419.html#customize-your-terminal-emulator", [
            [ "Fonts", "d0/d7d/a01419.html#fonts", null ],
            [ "Example Terminal Configurations", "d0/d7d/a01419.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d0/d7d/a01419.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d0/d7d/a01419.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d0/d7d/a01419.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d0/d7d/a01419.html#additional-resources", [
          [ "Let's Get Rusty", "d0/d7d/a01419.html#lets-get-rusty", null ],
          [ "Folke", "d0/d7d/a01419.html#folke", null ],
          [ "Other Resources", "d0/d7d/a01419.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d0/d7d/a01419.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d0/d7d/a01419.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "d0/d05/a01420.html", [
      [ "Table of Contents", "d0/d05/a01420.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "d0/d05/a01420.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "d0/d05/a01420.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "d0/d05/a01420.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "d0/d05/a01420.html#multiple-executables", null ],
        [ "Static Executables", "d0/d05/a01420.html#static-executables", null ],
        [ "What's the Icon?", "d0/d05/a01420.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "d0/d05/a01420.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "d0/d05/a01420.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "d0/d05/a01420.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "d0/d05/a01420.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "d0/d05/a01420.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "d0/d05/a01420.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "d0/d05/a01420.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "d0/d05/a01420.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "d0/d05/a01420.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "d0/d05/a01420.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "d0/d05/a01420.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "d0/d05/a01420.html#install-tree-sitter-cli", [
          [ "Download From Github", "d0/d05/a01420.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "d0/d05/a01420.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "d0/d05/a01420.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d0/d05/a01420.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "d0/d05/a01420.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "d0/d05/a01420.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "d0/d05/a01420.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "d0/d05/a01420.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "d0/d05/a01420.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "d0/d05/a01420.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "d0/d05/a01420.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "C-Menu Form", "d4/d20/a01421.html", null ],
    [ "DATE/TIME CONUNDRUM", "d1/df4/a01422.html", [
      [ "Overview", "d1/df4/a01422.html#overview", null ],
      [ "Correct workaround", "d1/df4/a01422.html#correct-workaround", null ],
      [ "Why the previous results looked contradictory", "d1/df4/a01422.html#why-the-previous-results-looked-contradictory", null ],
      [ "Important note about <span class=\"tt\">gmtime_r()</span>", "d1/df4/a01422.html#important-note-about-gmtime_r", null ],
      [ "Recommended helper", "d1/df4/a01422.html#recommended-helper", null ],
      [ "Revised interpretation of the original test cases", "d1/df4/a01422.html#revised-interpretation-of-the-original-test-cases", null ],
      [ "Original demonstration code", "d1/df4/a01422.html#original-demonstration-code", null ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "d9/ddc/a01423.html", [
      [ "Table of Contents", "d9/ddc/a01423.html#table-of-contents-4", null ],
      [ "Introduction", "d9/ddc/a01423.html#introduction-4", null ],
      [ "C-Menu Previews", "d9/ddc/a01423.html#c-menu-previews", [
        [ "Menu", "d9/ddc/a01423.html#menu", null ],
        [ "Form", "d9/ddc/a01423.html#form", null ],
        [ "Pick - Object Selection", "d9/ddc/a01423.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "d9/ddc/a01423.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "d9/ddc/a01423.html#rsh---a-root-shell-alternative", null ],
        [ "lf - A Regular Expression File Finder", "d9/ddc/a01423.html#lf---a-regular-expression-file-finder", null ]
      ] ],
      [ "API", "d9/ddc/a01423.html#api", [
        [ "Completions in Neovim", "d9/ddc/a01423.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "d9/ddc/a01423.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "d9/ddc/a01423.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "d9/ddc/a01423.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "d9/ddc/a01423.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "d9/ddc/a01423.html#rsh-static-linking", null ],
          [ "Prerequisites", "d9/ddc/a01423.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "d9/ddc/a01423.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "d9/ddc/a01423.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "d9/ddc/a01423.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "d9/ddc/a01423.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "lf", "d5/da5/a01424.html", [
      [ "NAME", "d5/da5/a01424.html#name", null ],
      [ "SYNOPSIS", "d5/da5/a01424.html#synopsis-1", null ],
      [ "DESCRIPTION", "d5/da5/a01424.html#description-1", null ],
      [ "OPTIONS", "d5/da5/a01424.html#options-1", null ],
      [ "EXAMPLES", "d5/da5/a01424.html#examples-4", null ],
      [ "REPORTING BUGS", "d5/da5/a01424.html#reporting-bugs", null ],
      [ "COPYRIGHT", "d5/da5/a01424.html#copyright-1", null ],
      [ "LICENSE", "d5/da5/a01424.html#license-1", null ],
      [ "SEE ALSO", "d5/da5/a01424.html#see-also-1", null ]
    ] ],
    [ "man_template", "db/df2/a01425.html", [
      [ "NAME", "db/df2/a01425.html#name-1", null ],
      [ "SYNOPSIS", "db/df2/a01425.html#synopsis-2", null ],
      [ "DESCRIPTION", "db/df2/a01425.html#description-2", null ],
      [ "OPTIONS", "db/df2/a01425.html#options-2", [
        [ "ianchor-autotoc_md93ilinebr", "db/df2/a01425.html#ianchor-autotoc_md93ilinebr", null ],
        [ "date: June 2026", "db/df2/a01425.html#date-june-2026-2", null ],
        [ "GEOMETRY", "db/df2/a01425.html#geometry", null ],
        [ "CONFIGURATION", "db/df2/a01425.html#configuration", null ],
        [ "INPUT/OUTPUT", "db/df2/a01425.html#inputoutput", [
          [ "FILES", "db/df2/a01425.html#files", null ]
        ] ],
        [ "DIRECTORIES", "db/df2/a01425.html#directories", null ],
        [ "COMMANDS", "db/df2/a01425.html#commands", null ],
        [ "THEME", "db/df2/a01425.html#theme-1", null ],
        [ "GAMMA", "db/df2/a01425.html#gamma-1", null ],
        [ "STANDARD COLORS", "db/df2/a01425.html#standard-colors-1", null ]
      ] ],
      [ "EXAMPLES", "db/df2/a01425.html#examples-5", null ],
      [ "REPORTING BUGS", "db/df2/a01425.html#reporting-bugs-1", null ],
      [ "COPYRIGHT", "db/df2/a01425.html#copyright-2", null ],
      [ "LICENSE", "db/df2/a01425.html#license-2", null ],
      [ "SEE ALSO", "db/df2/a01425.html#see-also-2", null ]
    ] ],
    [ "C-Menu Start-up Options", "dc/de6/a01426.html", null ],
    [ "OVERVIEW", "db/d78/a01427.html", [
      [ "Table of Contents", "db/d78/a01427.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "db/d78/a01427.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "db/d78/a01427.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "db/d78/a01427.html#c-menu-introduction", null ],
          [ "View Line Numbering", "db/d78/a01427.html#view-line-numbering", null ],
          [ "Large Log File in View", "db/d78/a01427.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "db/d78/a01427.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "db/d78/a01427.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "db/d78/a01427.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "db/d78/a01427.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "db/d78/a01427.html#c-menu-api", null ],
          [ "Elements of C-Menu", "db/d78/a01427.html#elements-of-c-menu", null ],
          [ "Key Features", "db/d78/a01427.html#key-features", null ],
          [ "Highlights (Pun Intended)", "db/d78/a01427.html#highlights-pun-intended", null ],
          [ "Just Do It", "db/d78/a01427.html#just-do-it", null ],
          [ "Menu", "db/d78/a01427.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "db/d78/a01427.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "db/d78/a01427.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "db/d78/a01427.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "db/d78/a01427.html#form-key-features", null ],
          [ "Form Data Types", "db/d78/a01427.html#form-data-types-4", null ],
          [ "Sample Menu Description File", "db/d78/a01427.html#sample-menu-description-file", null ],
          [ "View", "db/d78/a01427.html#view", [
            [ "Log File With Editor", "db/d78/a01427.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "db/d78/a01427.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "db/d78/a01427.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "db/d78/a01427.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "db/d78/a01427.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "db/d78/a01427.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "db/d78/a01427.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "db/d78/a01427.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "db/d78/a01427.html#gray-gamma", null ],
          [ "RSH", "db/d78/a01427.html#rsh", null ],
          [ "Maintaining Security with RSH", "db/d78/a01427.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "db/d78/a01427.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "db/d78/a01427.html#features", null ],
        [ "Configuration", "db/d78/a01427.html#configuration-1", null ],
        [ "MIT License", "db/d78/a01427.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "d2/db1/a01428.html", [
      [ "Design Philosophy and Optimizations", "d2/db1/a01428.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "d2/db1/a01428.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu Pick", "d1/d3b/a01429.html", null ],
    [ "C-Menu README", "d8/dd0/a01430.html", [
      [ "New Features for lf", "d8/dd0/a01430.html#new-features-for-lf", [
        [ "Installment Loan Calculator - Built with C-Menu", "d8/dd0/a01430.html#installment-loan-calculator---built-with-c-menu", null ]
      ] ],
      [ "C-Menu Introduction", "d8/dd0/a01430.html#c-menu-introduction-1", null ],
      [ "Table of Contents", "d8/dd0/a01430.html#table-of-contents-6", null ],
      [ "Why C-Menu", "d8/dd0/a01430.html#why-c-menu", null ],
      [ "Components", "d8/dd0/a01430.html#components", null ],
      [ "Quick Start", "d8/dd0/a01430.html#quick-start", null ],
      [ "Core Concepts", "d8/dd0/a01430.html#core-concepts", null ],
      [ "Examples", "d8/dd0/a01430.html#examples-6", [
        [ "Menu", "d8/dd0/a01430.html#menu-2", null ],
        [ "Form", "d8/dd0/a01430.html#form-1", null ],
        [ "Pick", "d8/dd0/a01430.html#pick", null ],
        [ "View", "d8/dd0/a01430.html#view-1", null ],
        [ "lf", "d8/dd0/a01430.html#lf-1", null ],
        [ "rsh", "d8/dd0/a01430.html#rsh-1", null ]
      ] ],
      [ "Documentation", "d8/dd0/a01430.html#documentation-1", null ],
      [ "Configuration", "d8/dd0/a01430.html#configuration-2", null ],
      [ "Platform and Requirements", "d8/dd0/a01430.html#platform-and-requirements", null ],
      [ "Security Notes", "d8/dd0/a01430.html#security-notes", null ],
      [ "Why the Design Works", "d8/dd0/a01430.html#why-the-design-works", null ],
      [ "Contributing", "d8/dd0/a01430.html#contributing", null ]
    ] ],
    [ "C-Menu ROADMAP", "d7/d8b/a01431.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "d7/d8b/a01431.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "d7/d8b/a01431.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "d7/d8b/a01431.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "d7/d8b/a01431.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "d7/d8b/a01431.html#autotoc_md029---pre-release", [
        [ "Form", "d7/d8b/a01431.html#form-2", null ],
        [ "Pick", "d7/d8b/a01431.html#pick-1", null ],
        [ "Exercises - Example Use Cases", "d7/d8b/a01431.html#exercises---example-use-cases", null ],
        [ "View", "d7/d8b/a01431.html#view-2", null ]
      ] ],
      [ "1.0.0 - Initial Release", "d7/d8b/a01431.html#autotoc_md100---initial-release", [
        [ "General", "d7/d8b/a01431.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "d7/d8b/a01431.html#autotoc_md110---feature-enhancements", [
        [ "General", "d7/d8b/a01431.html#general-1", null ]
      ] ]
    ] ],
    [ "rsh", "db/dff/a01432.html", [
      [ "NAME", "db/dff/a01432.html#name-2", null ],
      [ "SYNOPSIS", "db/dff/a01432.html#synopsis-3", null ],
      [ "DESCRIPTION", "db/dff/a01432.html#description-3", null ],
      [ "NOTE", "db/dff/a01432.html#note", null ],
      [ "ROOT AUTHORITY", "db/dff/a01432.html#root-authority", null ],
      [ "MAINTAINING SECURITY WITH RSH", "db/dff/a01432.html#maintaining-security-with-rsh-1", null ],
      [ "BEST PRACTICES FOR USING RSH", "db/dff/a01432.html#best-practices-for-using-rsh", null ],
      [ "RESTRICT ACCESS TO RSH", "db/dff/a01432.html#restrict-access-to-rsh", null ],
      [ "MONITOR RSH USAGE", "db/dff/a01432.html#monitor-rsh-usage", null ],
      [ "PAM", "db/dff/a01432.html#pam", null ],
      [ "USAGE", "db/dff/a01432.html#usage", null ],
      [ "OPTIONS", "db/dff/a01432.html#options-3", null ],
      [ "EXAMPLES", "db/dff/a01432.html#examples-7", null ],
      [ "REPORTING BUGS", "db/dff/a01432.html#reporting-bugs-2", null ],
      [ "COPYRIGHT", "db/dff/a01432.html#copyright-3", null ],
      [ "LICENSE", "db/dff/a01432.html#license-3", null ],
      [ "SEE ALSO", "db/dff/a01432.html#see-also-3", null ]
    ] ],
    [ "snippets", "d2/d9b/a01433.html", [
      [ "Table of Contents", "d2/d9b/a01433.html#table-of-contents-7", [
        [ "C-Menu Desktop Files", "d2/d9b/a01433.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "d2/d9b/a01433.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "d2/d9b/a01433.html#shell-logging", null ],
          [ "Prepend Path", "d2/d9b/a01433.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "d2/d9b/a01433.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "d2/d9b/a01433.html#security-through-obscurity", null ],
          [ "RSH Helpers", "d2/d9b/a01433.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "d2/d9b/a01433.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "d2/d9b/a01433.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "d2/d9b/a01433.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "d2/d9b/a01433.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "d2/d9b/a01433.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "d2/d9b/a01433.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "d2/d9b/a01433.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "d2/d9b/a01433.html#locale-settings", null ],
          [ "System Specific Environment Variables", "d2/d9b/a01433.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "d2/d9b/a01433.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "d2/d9b/a01433.html#terminal-configurations", [
          [ "Ghostty", "d2/d9b/a01433.html#ghostty-1", null ],
          [ "Kitty", "d2/d9b/a01433.html#kitty", null ],
          [ "Alacritty", "d2/d9b/a01433.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "d2/d9b/a01433.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "d2/d9b/a01433.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "d1/de7/a01434.html", [
      [ "Background", "d1/de7/a01434.html#background", null ],
      [ "Suppression File", "d1/de7/a01434.html#suppression-file", null ],
      [ "How to Run", "d1/de7/a01434.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "d1/de7/a01434.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "d1/de7/a01434.html#running-manually", null ]
      ] ],
      [ "Expected Output", "d1/de7/a01434.html#expected-output", null ],
      [ "Reference", "d1/de7/a01434.html#reference", null ]
    ] ],
    [ "C-Menu View", "d3/d95/a01435.html", [
      [ "RSH - A Root Shell Alternative", "d3/d95/a01435.html#rsh---a-root-shell-alternative-1", null ],
      [ "lf - A Regular Expression File Finder", "d3/d95/a01435.html#lf---a-regular-expression-file-finder-1", null ]
    ] ],
    [ "CONTRIBUTING", "dc/d85/a01436.html", null ],
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
"d1/d56/a01308.html#aea15cbd72774cba6b30200d83467ae3e",
"d5/d32/a01214.html#ga1c2e4b3dca428f3a8a78343cc854c3c6",
"d6/dae/a01304.html#af81b2364a4596ddea7478104f4817b82",
"d8/d8e/a01224.html#ga4da25f98e58860d93b737cdc1997e9e9",
"d8/db9/a00725.html#acbdce6357eb2671e308bbb88e6e87d80",
"db/d28/a01133.html#a6b007a96a02f8503343c038608ddf369",
"dd/dd8/a00719.html#a87b22b8c9213bcf6c0fae14e67950b2baecce67e7c270c27504ddb432a7299225",
"globals_z.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';