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
    [ "API", "df/d0b/a01372.html", [
      [ "How to get C-Menu", "df/d0b/a01372.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "df/d0b/a01372.html#get-c-menu-on-github", null ],
        [ "Introduction", "df/d0b/a01372.html#introduction", null ],
        [ "API Organization", "df/d0b/a01372.html#api-organization", [
          [ "C-Menu Header Files", "df/d0b/a01372.html#c-menu-header-files", [
            [ "include/cm.h", "df/d0b/a01372.html#includecmh", null ],
            [ "include/common.h", "df/d0b/a01372.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "df/d0b/a01372.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "df/d0b/a01372.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "df/d0b/a01372.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "df/d0b/a01372.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "df/d0b/a01372.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "df/d0b/a01372.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "d7/d38/a01373.html", [
      [ "How to get C-Menu", "d7/d38/a01373.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "d7/d38/a01373.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "d7/d38/a01373.html#table-of-contents", null ],
        [ "Introduction", "d7/d38/a01373.html#introduction-1", null ],
        [ "Prerequisites", "d7/d38/a01373.html#prerequisites", [
          [ "Not Required, But Recommended", "d7/d38/a01373.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "d7/d38/a01373.html#getting-started", [
          [ "C-Menu Environment Variables", "d7/d38/a01373.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "d7/d38/a01373.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "d7/d38/a01373.html#rsh-safety-features", null ],
          [ "Using RSH", "d7/d38/a01373.html#using-rsh", null ],
          [ "RSH - A Use Case", "d7/d38/a01373.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "d7/d38/a01373.html#starting-c-menu", null ],
        [ "C-Menu configuration", "d7/d38/a01373.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "d7/d38/a01373.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "d7/d38/a01373.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "d7/d38/a01373.html#menu-description-file-format", null ],
          [ "Form field editor", "d7/d38/a01373.html#form-field-editor", [
            [ "Form Line Type Specifiers", "d7/d38/a01373.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "d7/d38/a01373.html#form-field-delimiters", null ],
            [ "Form Data Types", "d7/d38/a01373.html#form-data-types", null ],
            [ "Form Line Syntax", "d7/d38/a01373.html#form-line-syntax", null ],
            [ "Form Options", "d7/d38/a01373.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "d7/d38/a01373.html#c-menu-pick", [
          [ "Pick Usage", "d7/d38/a01373.html#pick-usage", [
            [ "Selecting Items", "d7/d38/a01373.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "d7/d38/a01373.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "d7/d38/a01373.html#c-menu-view", [
          [ "View Options", "d7/d38/a01373.html#view-options", [
            [ "View Navigation", "d7/d38/a01373.html#view-navigation", null ],
            [ "Searching Forward", "d7/d38/a01373.html#searching-forward", null ],
            [ "Searching Backward", "d7/d38/a01373.html#searching-backward", null ],
            [ "Horizontal Scrolling", "d7/d38/a01373.html#horizontal-scrolling", null ],
            [ "Motion Keys", "d7/d38/a01373.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "d7/d38/a01373.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "d7/d38/a01373.html#c-menu-configuration-file-example", null ],
          [ "lf", "d7/d38/a01373.html#lf", null ],
          [ "whence", "d7/d38/a01373.html#whence", null ]
        ] ],
        [ "Troubleshooting", "d7/d38/a01373.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "d7/d38/a01373.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "d2/dff/a01374.html", null ],
    [ "Changelog", "d5/df5/a01375.html", [
      [ "[Released] - 2026-02-04", "d5/df5/a01375.html#released---2026-02-04", [
        [ "Fixed", "d5/df5/a01375.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d5/df5/a01375.html#autotoc_md028--2026-02-04", [
        [ "Added", "d5/df5/a01375.html#added", null ]
      ] ]
    ] ],
    [ "exercises", "d2/d29/a01376.html", [
      [ "Table of Contents", "d2/d29/a01376.html#table-of-contents-1", [
        [ "Introduction", "d2/d29/a01376.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "d2/d29/a01376.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "d2/d29/a01376.html#sddm-background-configuration", [
            [ "Requisites", "d2/d29/a01376.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "d2/d29/a01376.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "d2/d29/a01376.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "d2/d29/a01376.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d3/dea/a01377.html", [
      [ "How to get C-Menu", "d3/dea/a01377.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d3/dea/a01377.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d3/dea/a01377.html#table-of-contents-2", null ],
        [ "Introduction", "d3/dea/a01377.html#introduction-3", null ],
        [ "Installing Rust", "d3/dea/a01377.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d3/dea/a01377.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d3/dea/a01377.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d3/dea/a01377.html#installing-bat", [
          [ "Bat On Linux", "d3/dea/a01377.html#bat-on-linux", null ],
          [ "Bat On macOS", "d3/dea/a01377.html#bat-on-macos", null ],
          [ "Bat On Windows", "d3/dea/a01377.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d3/dea/a01377.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d3/dea/a01377.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d3/dea/a01377.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d3/dea/a01377.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d3/dea/a01377.html#lsd", [
          [ "lsd On Linux", "d3/dea/a01377.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d3/dea/a01377.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d3/dea/a01377.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d3/dea/a01377.html#highlighting", null ],
        [ "Tree-Sitter", "d3/dea/a01377.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d3/dea/a01377.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d3/dea/a01377.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d3/dea/a01377.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d3/dea/a01377.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d3/dea/a01377.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d3/dea/a01377.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d3/dea/a01377.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d3/dea/a01377.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d3/dea/a01377.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d3/dea/a01377.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d3/dea/a01377.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d3/dea/a01377.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d3/dea/a01377.html#rustlings", null ],
        [ "Neovim", "d3/dea/a01377.html#neovim", null ],
        [ "Neovim Configuration", "d3/dea/a01377.html#neovim-configuration", [
          [ "Custom Highlights", "d3/dea/a01377.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d3/dea/a01377.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d3/dea/a01377.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d3/dea/a01377.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d3/dea/a01377.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d3/dea/a01377.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d3/dea/a01377.html#ghostty", [
          [ "Ghostty On Linux", "d3/dea/a01377.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d3/dea/a01377.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d3/dea/a01377.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d3/dea/a01377.html#useful-configurations", [
          [ "Alternate Bash Executable", "d3/dea/a01377.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d3/dea/a01377.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d3/dea/a01377.html#customize-your-terminal-emulator", [
            [ "Fonts", "d3/dea/a01377.html#fonts", null ],
            [ "Example Terminal Configurations", "d3/dea/a01377.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d3/dea/a01377.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d3/dea/a01377.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d3/dea/a01377.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d3/dea/a01377.html#additional-resources", [
          [ "Let's Get Rusty", "d3/dea/a01377.html#lets-get-rusty", null ],
          [ "Folke", "d3/dea/a01377.html#folke", null ],
          [ "Other Resources", "d3/dea/a01377.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d3/dea/a01377.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d3/dea/a01377.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "db/d74/a01378.html", [
      [ "Table of Contents", "db/d74/a01378.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "db/d74/a01378.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "db/d74/a01378.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "db/d74/a01378.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "db/d74/a01378.html#multiple-executables", null ],
        [ "Static Executables", "db/d74/a01378.html#static-executables", null ],
        [ "What's the Icon?", "db/d74/a01378.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "db/d74/a01378.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "db/d74/a01378.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "db/d74/a01378.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "db/d74/a01378.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "db/d74/a01378.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "db/d74/a01378.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "db/d74/a01378.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "db/d74/a01378.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "db/d74/a01378.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "db/d74/a01378.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "db/d74/a01378.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "db/d74/a01378.html#install-tree-sitter-cli", [
          [ "Download From Github", "db/d74/a01378.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "db/d74/a01378.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "db/d74/a01378.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "db/d74/a01378.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "db/d74/a01378.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "db/d74/a01378.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "db/d74/a01378.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "db/d74/a01378.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "db/d74/a01378.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "db/d74/a01378.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "db/d74/a01378.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "DATE/TIME CONUNDRUM", "d0/d9b/a01379.html", [
      [ "Overview", "d0/d9b/a01379.html#overview", null ],
      [ "Correct workaround", "d0/d9b/a01379.html#correct-workaround", null ],
      [ "Why the previous results looked contradictory", "d0/d9b/a01379.html#why-the-previous-results-looked-contradictory", null ],
      [ "Important note about <span class=\"tt\">gmtime_r()</span>", "d0/d9b/a01379.html#important-note-about-gmtime_r", null ],
      [ "Recommended helper", "d0/d9b/a01379.html#recommended-helper", null ],
      [ "Revised interpretation of the original test cases", "d0/d9b/a01379.html#revised-interpretation-of-the-original-test-cases", null ],
      [ "Original demonstration code", "d0/d9b/a01379.html#original-demonstration-code", null ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "dd/d6d/a01380.html", [
      [ "Table of Contents", "dd/d6d/a01380.html#table-of-contents-4", null ],
      [ "Introduction", "dd/d6d/a01380.html#introduction-4", null ],
      [ "C-Menu Previews", "dd/d6d/a01380.html#c-menu-previews", [
        [ "Menu", "dd/d6d/a01380.html#menu", null ],
        [ "Form", "dd/d6d/a01380.html#form", null ],
        [ "Pick - Object Selection", "dd/d6d/a01380.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "dd/d6d/a01380.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "dd/d6d/a01380.html#rsh---a-root-shell-alternative-1", null ],
        [ "lf - A Regular Expression File Finder", "dd/d6d/a01380.html#lf---a-regular-expression-file-finder-1", null ]
      ] ],
      [ "API", "dd/d6d/a01380.html#api", [
        [ "Completions in Neovim", "dd/d6d/a01380.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "dd/d6d/a01380.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "dd/d6d/a01380.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "dd/d6d/a01380.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "dd/d6d/a01380.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "dd/d6d/a01380.html#rsh-static-linking", null ],
          [ "Prerequisites", "dd/d6d/a01380.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "dd/d6d/a01380.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "dd/d6d/a01380.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "dd/d6d/a01380.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "dd/d6d/a01380.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "OVERVIEW", "da/d77/a01381.html", [
      [ "Table of Contents", "da/d77/a01381.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "da/d77/a01381.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "da/d77/a01381.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "da/d77/a01381.html#c-menu-introduction", null ],
          [ "View Line Numbering", "da/d77/a01381.html#view-line-numbering", null ],
          [ "Large Log File in View", "da/d77/a01381.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "da/d77/a01381.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "da/d77/a01381.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "da/d77/a01381.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "da/d77/a01381.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "da/d77/a01381.html#c-menu-api", null ],
          [ "Elements of C-Menu", "da/d77/a01381.html#elements-of-c-menu", null ],
          [ "Key Features", "da/d77/a01381.html#key-features", null ],
          [ "Highlights (Pun Intended)", "da/d77/a01381.html#highlights-pun-intended", null ],
          [ "Just Do It", "da/d77/a01381.html#just-do-it", null ],
          [ "Menu", "da/d77/a01381.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "da/d77/a01381.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "da/d77/a01381.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "da/d77/a01381.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "da/d77/a01381.html#form-key-features", null ],
          [ "Form Data Types", "da/d77/a01381.html#form-data-types-2", null ],
          [ "Sample Menu Description File", "da/d77/a01381.html#sample-menu-description-file", null ],
          [ "View", "da/d77/a01381.html#view", [
            [ "Log File With Editor", "da/d77/a01381.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "da/d77/a01381.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "da/d77/a01381.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "da/d77/a01381.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "da/d77/a01381.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "da/d77/a01381.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "da/d77/a01381.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "da/d77/a01381.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "da/d77/a01381.html#gray-gamma", null ],
          [ "RSH", "da/d77/a01381.html#rsh", null ],
          [ "Maintaining Security with RSH", "da/d77/a01381.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "da/d77/a01381.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "da/d77/a01381.html#features", null ],
        [ "Configuration", "da/d77/a01381.html#configuration", null ],
        [ "MIT License", "da/d77/a01381.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "de/d9d/a01382.html", [
      [ "Design Philosophy and Optimizations", "de/d9d/a01382.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "de/d9d/a01382.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu ROADMAP", "de/dfe/a01383.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "de/dfe/a01383.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "de/dfe/a01383.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "de/dfe/a01383.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "de/dfe/a01383.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "de/dfe/a01383.html#autotoc_md029---pre-release", [
        [ "Form", "de/dfe/a01383.html#form-1", null ],
        [ "Pick", "de/dfe/a01383.html#pick", null ],
        [ "Exercises - Example Use Cases", "de/dfe/a01383.html#exercises---example-use-cases", null ],
        [ "View", "de/dfe/a01383.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "de/dfe/a01383.html#autotoc_md100---initial-release", [
        [ "General", "de/dfe/a01383.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "de/dfe/a01383.html#autotoc_md110---feature-enhancements", [
        [ "General", "de/dfe/a01383.html#general-1", null ]
      ] ]
    ] ],
    [ "snippets", "d7/dde/a01384.html", [
      [ "Table of Contents", "d7/dde/a01384.html#table-of-contents-6", [
        [ "C-Menu Desktop Files", "d7/dde/a01384.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "d7/dde/a01384.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "d7/dde/a01384.html#shell-logging", null ],
          [ "Prepend Path", "d7/dde/a01384.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "d7/dde/a01384.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "d7/dde/a01384.html#security-through-obscurity", null ],
          [ "RSH Helpers", "d7/dde/a01384.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "d7/dde/a01384.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "d7/dde/a01384.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "d7/dde/a01384.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "d7/dde/a01384.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "d7/dde/a01384.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "d7/dde/a01384.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "d7/dde/a01384.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "d7/dde/a01384.html#locale-settings", null ],
          [ "System Specific Environment Variables", "d7/dde/a01384.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "d7/dde/a01384.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "d7/dde/a01384.html#terminal-configurations", [
          [ "Ghostty", "d7/dde/a01384.html#ghostty-1", null ],
          [ "Kitty", "d7/dde/a01384.html#kitty", null ],
          [ "Alacritty", "d7/dde/a01384.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "d7/dde/a01384.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "d7/dde/a01384.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "df/d68/a01385.html", [
      [ "Background", "df/d68/a01385.html#background", null ],
      [ "Suppression File", "df/d68/a01385.html#suppression-file", null ],
      [ "How to Run", "df/d68/a01385.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "df/d68/a01385.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "df/d68/a01385.html#running-manually", null ]
      ] ],
      [ "Expected Output", "df/d68/a01385.html#expected-output", null ],
      [ "Reference", "df/d68/a01385.html#reference", null ]
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
"d3/d32/a01176.html#ga56bbb25c4d0944e1b96b9a723cde2ae9",
"d6/dc0/a00734.html#ac7b30cf7f83588cb6bc1c716be66f5a2",
"d8/db9/a00725.html#a1e8b2f4dea5e88e7af17541140207df0",
"d9/d10/a01103.html#ab4561d0b4e00154d5a4af0aca0af2df7",
"db/d74/a01378.html#truecolor-support",
"dd/dd8/a00719.html#ae9bfdce1fecee7783df822358ca938b0",
"functions_vars_s.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';