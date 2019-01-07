angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope, PricingService) {
        $scope.pricing = PricingService.getPricing();
        $scope.currentCategory = null;

        $scope.setCurrentCategory = function (category) {
            $scope.currentCategory = category;
        };

        $scope.isMuted = function (category) {
            return $scope.currentCategory !== null && $scope.currentCategory !== category;
        };
    })
    .factory('PricingService', function () {
        var pricing = [
            {
                category: 'standard',
                display: 'Standard',
                instances: [
                    { ram: '0.625', cpu: '0.15', disk: '20', network: '10', price: '0.020'},
                    { ram: '1.75', cpu: '1', disk: '56', network: '10', price: '0.056'},
                    { ram: '3.75', cpu: '1', disk: '123', network: '10', price: '0.12'}
                ]
            },
            {
                category: 'highmemory',
                display: 'High Memory',
                instances: [
                    { ram: '17.125', cpu: '2', disk: '420', network: '10', price: '0.409'},
                    { ram: '34.25', cpu: '4', disk: '843', network: '10', price: '0.817'},
                    { ram: '68.375', cpu: '8', disk: '1122', network: '10', price: '1.630'}
                ]
            },
            {
                category: 'highcpu',
                display: 'High CPU',
                instances: [
                    { ram: '1.75', cpu: '2', disk: '75', network: '10', price: '0.127'},
                    { ram: '7', cpu: '7', disk: '263', network: '10', price: '0.508'},
                    { ram: '16', cpu: '16', disk: '600', network: '10', price: '1.160'}
                ]
            },
            {
                category: 'highio',
                display: 'High I/O',
                instances: [
                    { ram: '60.5', cpu: '8', disk: '1452', network: '10', price: '3.067'},
                    { ram: '128', cpu: '16', disk: '3072', network: '10', price: '6.488'},
                    { ram: '256', cpu: '32', disk: '6144', network: '10', price: '12.976'}
                ]
            }
            /*,{
                category: 'highstorage',
                display: 'High Storage',
                instances: [
                    { ram: '32', cpu: '8', disk: '7680', network: '10', price: '0.863'},
                    { ram: '64', cpu: '16', disk: '15360', network: '10', price: '1.726'},
                    { ram: '128', cpu: '32', disk: '30720', network: '10', price: '3.451'}
                ]
            }*/
        ];

        var getPricing = function () {
            return pricing;
        };

        return {
            getPricing: getPricing
        }
    });