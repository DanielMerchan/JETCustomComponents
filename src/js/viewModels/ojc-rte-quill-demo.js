/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['knockout', 'ojc-rte-quill/loader', 'ojs/ojbutton'
    ],
    function(ko) {

        function CustomerViewModel() {
            var self = this;
            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.

            self.editorElement;

            self.testSexy = event => {
                console.log("SEXY");
            }

            self.deleteText = (event,vm) => {
                self.editorElement.deleteText(1,2);
            }

            self.getContents = (event,vm)  => {
                console.log(self.editorElement.getContents());
            }

            self.getLength =  (event,vm)  => {
                console.log(self.editorElement.getLength());
            }

            self.modules = {
                syntax:true
            }

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * This method might be called multiple times - after the View is created
             * and inserted into the DOM and after the View is reconnected
             * after being disconnected.
             */
            self.connected = function() {
                self.editorElement = document.getElementById('asf');
            };

            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function() {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after transition to the new View is complete.
             * That includes any possible animation between the old and the new View.
             */
            self.transitionCompleted = function() {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new CustomerViewModel();
    }
);