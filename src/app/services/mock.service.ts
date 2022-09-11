import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }


  getAutoSuggestMock() {
    return {
      "s": [
        {
          "n": "Los Angeles",
          "d": "Callifornia",
          "c": "United States",
          "cc": "US",
          "cn": "Los Angeles",
          "nbcn": "Los Angeles",
          "t": "City",
          "lId": "34524",
          "lat": 34.0522,
          "lng": -118.2437,
          "cd": "LAX",
          "tzi": {
            "tz": "Pacific Standard Time",
            "dt": "01/10/2020 08:58:01"
          },
          "sl": [],
          "sc": "NA",
          "iaa": false
        },
        {
          "n": "Hollywood",
          "d": "Los Angeles Callifornia",
          "c": "United States",
          "cc": "US",
          "cn": "Los Angeles",
          "nbcn": "Los Angeles",
          "t": "PointOfInterest",
          "lId": "34524",
          "lat": 34.0928,
          "lng": -118.3287,
          "cd": "",
          "tzi": {
            "tz": "Pacific Standard Time",
            "dt": "01/10/2020 08:58:01"
          },
          "sl": [],
          "sc": "NA",
          "iaa": false
        },
        {
          "n": "LAX - Los Angeles, CA",
          "d": "Los Angeles Int'l Airport",
          "c": "United States",
          "cc": "US",
          "cn": "Los Angeles",
          "nbcn": "Los Angeles",
          "t": "Airport",
          "lId": "34524",
          "lat": 33.9416,
          "lng": -118.4085,
          "cd": "LAX",
          "tzi": {
            "tz": "Pacific Standard Time",
            "dt": "01/10/2020 08:58:01"
          },
          "sl": [],
          "sc": "NA",
          "iaa": false
        }
      ],
      "wrn": []
    }

  }


  getHotelSearchMock() {
    return {
      hotels: [
        {
          "id": "110804P91",
          "name": "San Francisco.s Barbary Past Walking Audio Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/93/77/fd.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/93/77/fd.jpg",
                "caption": "San Francisco.s Barbary Past Walking Audio Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "This is short Description!",
            "duration": "40 minutes",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 44.54,
            "breakUp": {
              "baseFareStartsFrom": 4.26,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 10.28
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "110804P22",
          "name": "San Francisco Japantown Tour about Food History and Resistance",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/36/a3/a0.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/36/a3/a0.jpg",
                "caption": "San Francisco Japantown Tour about Food History and Resistance"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "This is short Description!",
            "duration": "50 to 60 minutes",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 44.54,
            "breakUp": {
              "baseFareStartsFrom": 4.26,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 10.28
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "1108054P91",
          "name": "5San Francisco.s Barbary Past Walking Audio Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/93/77/fd.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/93/77/fd.jpg",
                "caption": "5San Francisco.s Barbary Past Walking Audio Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "This is short Description!",
            "duration": "40 minutes",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 44.54,
            "breakUp": {
              "baseFareStartsFrom": 4.26,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 10.28
                }
              ]
            },
            "isRefundable": false
          }
        }
      ]
    };
  }


  getCarMock() {
    return {
      "carRentals": [
        {
          "id": "NWJlZGRkOGQtZjc4ZC00NmNkLTk5NDgtM2UyMjQyMjI0MzNkLjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "dfcb2db5-c972-4eae-91dd-68b48de0243e",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2017.40,
            "breakup": {
              "baseFare": 1400.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 140.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 477.40
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 200.06
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 142.27
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 176.34
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 201740.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 201740.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 201740.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2017.4"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 201740.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 201740.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 201740.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2017.4"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 157500.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 157500.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 157500.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2017.4"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 157500.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 157500.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 157500.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2017.4"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2017.4,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2017.4,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2017.4"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2017.4,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2017.4,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2017.4"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 336.23,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 24
        },
        {
          "id": "NDA4NmZiYWItZDFiZC00ZTY0LWI4ZDQtZDNhZTdkN2FhNmQ1LjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "2cf656e3-66ad-43d2-bb8a-8061334fe7cb",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2161.50,
            "breakup": {
              "baseFare": 1500.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 150.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 511.50
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 214.35
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 152.41
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 188.91
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 216150.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 216150.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 216150.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 216150.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 168000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 168000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 168000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 168000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2161.5,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2161.5,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 360.25,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 22
        },
        {
          "id": "ZjQzMmRmNmQtMzE3Ny00ODY0LWJiNDYtZjIzZTE3NDFiOTNmLjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "0ba3c00a-3288-4d7a-a995-85261e197659",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2161.50,
            "breakup": {
              "baseFare": 1500.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 150.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 511.50
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 214.35
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 152.41
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 188.91
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 216150.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 216150.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 216150.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 216150.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 168000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 168000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 168000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 168000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2161.5,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2161.5,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 360.25,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 20
        },
        {
          "id": "ZTViNzNiMTMtZTU1Mi00NzE2LWI5NjgtNWU0MzQ3ODdkZDllLjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "36fee3c4-7363-4438-bc2c-cb5299388f1a",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2161.50,
            "breakup": {
              "baseFare": 1500.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 150.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 511.50
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 214.35
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 152.41
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 188.91
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 216150.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 216150.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 216150.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 216150.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 168000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 168000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 168000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 168000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2161.5,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2161.5,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 360.25,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 19
        },
        {
          "id": "ZjAxNjkwYmMtN2M4MS00MTM2LWFmYTUtNmY5ZjkwMjBkMTFiLjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "d0dd4b49-8369-4d60-8cd9-d24f36b7deeb",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2161.50,
            "breakup": {
              "baseFare": 1500.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 150.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 511.50
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 214.35
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 152.41
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 188.91
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 216150.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 216150.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 216150.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 216150.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 168000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 168000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 168000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 168000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2161.5,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2161.5,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 360.25,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 18
        },
        {
          "id": "YWVhYmJhYzctNDQ4MC00OTY2LWIyOGMtZmI3MDhkOWU2ODU1LjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "dc9dedec-8d3b-42c3-9491-fcd4df9f6bc8",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2161.50,
            "breakup": {
              "baseFare": 1500.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 150.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 511.50
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 214.35
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 152.41
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 188.91
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 216150.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 216150.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 216150.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 216150.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 168000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 168000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 168000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 168000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2161.5,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2161.5,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 360.25,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 23
        },
        {
          "id": "ODhmYzdjZjAtOGI3Yy00N2Q3LTgzOTAtMWQ5OGRmYTk5NmQzLjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "dc532232-7907-4683-a1aa-f311b27632e5",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2161.50,
            "breakup": {
              "baseFare": 1500.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 150.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 511.50
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 214.35
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 152.41
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 188.91
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 216150.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 216150.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 216150.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 216150.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 216150.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 168000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 168000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 168000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 168000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 168000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2161.5,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2161.5,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2161.5"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2161.5,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2161.5"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 360.25,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 21
        },
        {
          "id": "ZWY3ZDJhNzQtZjBkMi00MGI5LTllZGUtNzJhMzBiNWVmYWMyLjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "b2f2c20b-e1de-4ff9-9fc6-fc17a3ddf551",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2305.60,
            "breakup": {
              "baseFare": 1600.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 160.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 545.60
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 228.64
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 162.56
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 201.48
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 230560.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 230560.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 230560.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2305.6"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 230560.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 230560.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 230560.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2305.6"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 180000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 180000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 180000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2305.6"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 180000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 180000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 180000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2305.6"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2305.6,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2305.6,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2305.6"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2305.6,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2305.6,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2305.6"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 384.27,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 2
        },
        {
          "id": "NTNhMjU3YmEtNjUyMS00YTUzLTk4ZGMtODk5ODc5N2VhYWI1LjgkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "dropOffLocationId": "97dc139380f8d366b1fe4732e01ca9d0",
          "vehicleRefId": "8bf040da-5fd7-481d-850e-3c4d2aa63355",
          "vendorCode": "AL",
          "supplierId": "2oatexzow74",
          "rateCode": "AETEST",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 2449.70,
            "breakup": {
              "baseFare": 1700.00,
              "fees": [],
              "taxes": [],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [
                {
                  "source": "Agency",
                  "amount": 170.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 579.70
                }
              ],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [
              {
                "source": "vendorFee",
                "desc": "TRANSPORTATION FACILITY CHARGE",
                "amount": 15.00
              },
              {
                "source": "vendorFee",
                "desc": "AIRPORT ACCESS FEE 14.29 PCT",
                "amount": 242.93
              },
              {
                "source": "vendorFee",
                "desc": "CONCESSION RECOVERY FEE SURCHARGE",
                "amount": 3.00
              }
            ],
            "taxes": [
              {
                "source": "Supplier",
                "code": "7",
                "desc": "SALES TAX",
                "amount": 172.70
              },
              {
                "source": "Supplier",
                "code": "7",
                "desc": "CAR RENTAL SALES TAX",
                "amount": 214.05
              }
            ],
            "charges": [
              {
                "type": "Drop",
                "taxInclusive": false,
                "desc": "Drop Charge",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 244970.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 244970.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 244970.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2449.7"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 244970.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 244970.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 244970.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2449.7"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 190500.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 190500.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 190500.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2449.7"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 190500.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 190500.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 190500.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2449.7"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 2449.7,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 2449.7,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "2449.7"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 2449.7,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 2449.7,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "2449.7"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 408.28,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 1
        },
        {
          "id": "ZGNlMzkxMmUtMzI2MS00NGFkLTk3MDAtNGE1NmEzNTg5ZTY1LjEkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "390912e04b749bb0e5ff31379f53705f",
          "dropOffLocationId": "390912e04b749bb0e5ff31379f53705f",
          "vehicleRefId": "93a34d28-2198-4234-86e5-7df8ff734944",
          "vendorCode": "ZI",
          "supplierId": "2oavp7vngu8",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 345.41,
            "breakup": {
              "baseFare": 240.99,
              "fees": [
                {
                  "source": "vendorFee",
                  "desc": "Airport Concession Fee",
                  "amount": 26.77
                },
                {
                  "source": "vendorFee",
                  "desc": "$/DY C.R.F. SURCHARGE",
                  "amount": 3.00
                },
                {
                  "source": "vendorFee",
                  "desc": "TRANSP FAC CHG",
                  "amount": 15.00
                }
              ],
              "taxes": [
                {
                  "source": "Supplier",
                  "code": "7",
                  "desc": "Local Tax",
                  "amount": 59.65
                }
              ],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [],
            "taxes": [],
            "charges": [
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$10.00    EXTENSION FEE MAY APPLY",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "FUEL POLICY IS FULL TO FULL",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$15.00    LATE FEE MAY APPLY",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 34541.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 34541.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 34541.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "345.41"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 34541.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 34541.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 34541.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "345.41"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 28500.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 28500.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 28500.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "345.41"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 28500.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 28500.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 28500.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "345.41"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 345.41,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 345.41,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "345.41"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 345.41,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 345.41,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "345.41"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [
            {
              "type": "General",
              "text": "Smoke Free|4 Doors|5 Seats|AM/FM Radio|Air Bags|Air Conditioning|Power Steering|Power Brakes|Power Windows|Automatic|Holds 1 large, 2 small Suitcases|25-29 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-black.png|thumb=2021-kia-soul-s-5door-hatchback-black.png|cargroup=B|category=Compact"
            }
          ],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 57.57,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 48
        },
        {
          "id": "NDcyYWRiODAtYjY2My00NDhjLWFhZGMtYTEwOTAxNjY3OWRlLjEkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "390912e04b749bb0e5ff31379f53705f",
          "dropOffLocationId": "390912e04b749bb0e5ff31379f53705f",
          "vehicleRefId": "2302e3e5-e66a-49b5-b645-48a4e2990e40",
          "vendorCode": "ZI",
          "supplierId": "2oavp7vngu8",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 349.45,
            "breakup": {
              "baseFare": 243.99,
              "fees": [
                {
                  "source": "vendorFee",
                  "desc": "Airport Concession Fee",
                  "amount": 27.11
                },
                {
                  "source": "vendorFee",
                  "desc": "$/DY C.R.F. SURCHARGE",
                  "amount": 3.00
                },
                {
                  "source": "vendorFee",
                  "desc": "TRANSP FAC CHG",
                  "amount": 15.00
                }
              ],
              "taxes": [
                {
                  "source": "Supplier",
                  "code": "7",
                  "desc": "Local Tax",
                  "amount": 60.35
                }
              ],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [],
            "taxes": [],
            "charges": [
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$10.00    EXTENSION FEE MAY APPLY",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "FUEL POLICY IS FULL TO FULL",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$15.00    LATE FEE MAY APPLY",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 34945.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 34945.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 34945.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "349.45"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 34945.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 34945.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 34945.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "349.45"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 28500.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 28500.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 28500.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "349.45"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 28500.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 28500.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 28500.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "349.45"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 349.45,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 349.45,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "349.45"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 349.45,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 349.45,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "349.45"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [
            {
              "type": "General",
              "text": "Smoke Free|4 Doors|5 Seats|AM/FM Radio|CD Player|Air Bags|Air Conditioning|Anti-Lock Brakes|Automatic|Holds 1 large, 2 small Suitcases|29-35 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-toyota-corolla-le-sedan-grey.png|thumb=2020-toyota-corolla-le-sedan-grey.png|cargroup=C|category=Intermediate"
            }
          ],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 58.24,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 46
        },
        {
          "id": "YzkwOTFlMGQtZmZiYy00YzI3LWI1ZTgtZWVlMzk3MjY1MjU2LjEkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "390912e04b749bb0e5ff31379f53705f",
          "dropOffLocationId": "390912e04b749bb0e5ff31379f53705f",
          "vehicleRefId": "e7f13b6e-d503-4b46-b021-c2707101c06d",
          "vendorCode": "ZI",
          "supplierId": "2oavp7vngu8",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 374.97,
            "breakup": {
              "baseFare": 262.99,
              "fees": [
                {
                  "source": "vendorFee",
                  "desc": "Airport Concession Fee",
                  "amount": 29.22
                },
                {
                  "source": "vendorFee",
                  "desc": "$/DY C.R.F. SURCHARGE",
                  "amount": 3.00
                },
                {
                  "source": "vendorFee",
                  "desc": "TRANSP FAC CHG",
                  "amount": 15.00
                }
              ],
              "taxes": [
                {
                  "source": "Supplier",
                  "code": "7",
                  "desc": "Local Tax",
                  "amount": 64.76
                }
              ],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [],
            "taxes": [],
            "charges": [
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$10.00    EXTENSION FEE MAY APPLY",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "FUEL POLICY IS FULL TO FULL",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$15.00    LATE FEE MAY APPLY",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 37497.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 37497.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 37497.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "374.97"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 37497.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 37497.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 37497.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "374.97"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 30000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 30000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 30000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "374.97"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 30000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 30000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 30000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "374.97"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 374.97,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 374.97,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "374.97"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 374.97,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 374.97,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "374.97"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [
            {
              "type": "General",
              "text": "4 Doors|5 Seats|Radio|CD Player|Air Conditioning|Automatic|Holds 2 large, 2 small Suitcases|22-30 mpg|image=2021-toyota-camry-se-sedan-black.png|thumb=2021-toyota-camry-se-sedan-black.png|cargroup=E|category=Full-Size"
            }
          ],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 62.50,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 44
        },
        {
          "id": "OWI4ZDZiYjgtZWZiZC00MGYzLTkxMGItZDBhOTBiMTZhYzZhLjEkNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "390912e04b749bb0e5ff31379f53705f",
          "dropOffLocationId": "390912e04b749bb0e5ff31379f53705f",
          "vehicleRefId": "a5cf4f6d-d16b-4985-adfc-f700c6534315",
          "vendorCode": "ZI",
          "supplierId": "2oavp7vngu8",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 374.97,
            "breakup": {
              "baseFare": 262.99,
              "fees": [
                {
                  "source": "vendorFee",
                  "desc": "Airport Concession Fee",
                  "amount": 29.22
                },
                {
                  "source": "vendorFee",
                  "desc": "$/DY C.R.F. SURCHARGE",
                  "amount": 3.00
                },
                {
                  "source": "vendorFee",
                  "desc": "TRANSP FAC CHG",
                  "amount": 15.00
                }
              ],
              "taxes": [
                {
                  "source": "Supplier",
                  "code": "7",
                  "desc": "Local Tax",
                  "amount": 64.76
                }
              ],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [],
            "taxes": [],
            "charges": [
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$10.00    EXTENSION FEE MAY APPLY",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "FUEL POLICY IS FULL TO FULL",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$15.00    LATE FEE MAY APPLY",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 37497.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 37497.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 37497.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "374.97"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 37497.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 37497.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 37497.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "374.97"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 30000.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 30000.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 30000.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "374.97"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 30000.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 30000.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 30000.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "374.97"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 374.97,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 374.97,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "374.97"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 374.97,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 374.97,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "374.97"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [
            {
              "type": "General",
              "text": "4 Doors|5 Seats|Radio|CD Player|Air Conditioning|Automatic|Holds 1 large, 2 small Suitcases|24-35 mpg|Bluetooth/SYNC|Back-up Camera|image=2021-volkswagen-jetta-s-sedan-silver.png|thumb=2021-volkswagen-jetta-s-sedan-silver.png|cargroup=D|category=Standard"
            }
          ],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 62.50,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 43
        },
        {
          "id": "OTlhMTUxZWYtMTdjMi00MWVhLWJhYzUtOGY5MGRkY2VhYWE4LjckNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "f2000ff54cc27f77920bf4d3d3f4f6c6",
          "dropOffLocationId": "f2000ff54cc27f77920bf4d3d3f4f6c6",
          "vehicleRefId": "f3753a2b-de3a-41a9-a96a-cff38561205a",
          "vendorCode": "ZD",
          "supplierId": "2oav04dq03k",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 315.87,
            "breakup": {
              "baseFare": 218.99,
              "fees": [
                {
                  "source": "vendorFee",
                  "desc": "Airport Concession Fee",
                  "amount": 24.33
                },
                {
                  "source": "vendorFee",
                  "desc": "$/DY C.R.F. SURCHARGE",
                  "amount": 3.00
                },
                {
                  "source": "vendorFee",
                  "desc": "TRANSP FAC CHG",
                  "amount": 15.00
                }
              ],
              "taxes": [
                {
                  "source": "Supplier",
                  "code": "7",
                  "desc": "Local Tax",
                  "amount": 54.55
                }
              ],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [],
            "taxes": [],
            "charges": [
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$10.00    EXTENSION FEE MAY APPLY",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "FUEL POLICY IS FULL TO FULL",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$20.00    LATE FEE MAY APPLY",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 31587.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 31587.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 31587.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "315.87"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 31587.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 31587.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 31587.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "315.87"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 25500.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 25500.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 25500.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "315.87"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 25500.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 25500.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 25500.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "315.87"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 315.87,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 315.87,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "315.87"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 315.87,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 315.87,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "315.87"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [
            {
              "type": "General",
              "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 2 small suitcases|24 mpg|Bluetooth/SYNC|image=2021-kia-soul-s-5door-hatchback-white.png|thumb=2021-kia-soul-s-5door-hatchback-white.png|cargroup=B|category=Compact"
            }
          ],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 52.64,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 52
        },
        {
          "id": "MWMzOTJhMWMtMzkxYy00MzIyLThmOGEtMjJiYTkxMDc4NTVkLjckNDBlNzVmMjYtZDQ4Yi00OTc4LThkOGEtNjdhNDY5Y2Q1NjMxLUNMTlhUfDEzODk=",
          "pickUpLocationId": "f2000ff54cc27f77920bf4d3d3f4f6c6",
          "dropOffLocationId": "f2000ff54cc27f77920bf4d3d3f4f6c6",
          "vehicleRefId": "79c62fe5-20d1-4bcc-ac20-955b6ca92138",
          "vendorCode": "ZD",
          "supplierId": "2oav04dq03k",
          "inventoryType": "Prepaid",
          "displayFare": {
            "type": "Negotiated",
            "guaranteeRequired": false,
            "depositRequired": false,
            "currency": "USD",
            "totalFare": 315.87,
            "breakup": {
              "baseFare": 218.99,
              "fees": [
                {
                  "source": "vendorFee",
                  "desc": "Airport Concession Fee",
                  "amount": 24.33
                },
                {
                  "source": "vendorFee",
                  "desc": "$/DY C.R.F. SURCHARGE",
                  "amount": 3.00
                },
                {
                  "source": "vendorFee",
                  "desc": "TRANSP FAC CHG",
                  "amount": 15.00
                }
              ],
              "taxes": [
                {
                  "source": "Supplier",
                  "code": "7",
                  "desc": "Local Tax",
                  "amount": 54.55
                }
              ],
              "charges": [],
              "equipments": [],
              "coverages": [],
              "markups": [],
              "discounts": []
            },
            "commissions": [],
            "usdEquivalentExchangeRate": 1.0
          },
          "optionalCharges": {
            "fees": [],
            "taxes": [],
            "charges": [
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$10.00    EXTENSION FEE MAY APPLY",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "FUEL POLICY IS FULL TO FULL",
                "amount": 0.0
              },
              {
                "type": "Optional",
                "taxInclusive": false,
                "desc": "$20.00    LATE FEE MAY APPLY",
                "amount": 0.0
              }
            ],
            "coverages": [],
            "equipments": []
          },
          "purchaseOption": {
            "totalPurchaseUnits": 1,
            "cashCurrency": "USD",
            "pointsCurrency": "Points",
            "rewards": [
              {
                "id": "1116|1",
                "name": "Car Reward - BaseR",
                "rank": 1,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 31587.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1.0,
                  "maximumPoints": 31587.0,
                  "pointToCashFactor": {
                    "value": 0.0100000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 31587.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "315.87"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0100000"
                  }
                ],
                "redemption": {
                  "id": "1116|1",
                  "name": "Car Reward - BaseR",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 31587.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1.0,
                    "maximumPoints": 31587.0,
                    "pointToCashFactor": {
                      "value": 0.0100000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 31587.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "315.87"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0100000"
                    }
                  ]
                }
              },
              {
                "id": "4912|1",
                "name": "Car Redemption",
                "rank": 2,
                "type": "Variable_TieredVariable_LAPF_HybridFTP",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 0.0,
                  "points": 25500.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 1500.0,
                  "maximumPoints": 25500.0,
                  "pointToCashFactor": {
                    "value": 0.0130000,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1500.0000,
                  "roundingType": "Up"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 0.0,
                  "points": 25500.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "315.87"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "15"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0.0130000"
                  }
                ],
                "redemption": {
                  "id": "4912|1",
                  "name": "Car Redemption",
                  "type": "Variable_TieredVariable_LAPF_HybridFTP",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 0.0,
                    "points": 25500.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 1500.0,
                    "maximumPoints": 25500.0,
                    "pointToCashFactor": {
                      "value": 0.0130000,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1500.0000,
                    "roundingType": "Up"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 0.0,
                    "points": 25500.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "315.87"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "15"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0.0130000"
                    }
                  ]
                }
              },
              {
                "id": "511|7",
                "name": "Pay in Cash",
                "rank": 200,
                "type": "Purchase",
                "recommendation": {
                  "fee": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "maxQuantity": 1,
                  "cash": 315.87,
                  "points": 0.0
                },
                "isEligible": true,
                "ruleSet": {
                  "minimumPoints": 0.0,
                  "maximumPoints": 0.0,
                  "pointToCashFactor": {
                    "value": 0.0,
                    "operator": "Multiply"
                  },
                  "cashRoundingOff": 0.0,
                  "pointStepSize": 1.0,
                  "roundingType": "None"
                },
                "strikeOutValue": {
                  "cash": 0.0,
                  "points": 0.0
                },
                "actualValue": {
                  "cash": 315.87,
                  "points": 0.0
                },
                "stateBag": [
                  {
                    "key": "IsTotalFareEquivalentToNetFare",
                    "value": "False"
                  },
                  {
                    "key": "RequiresBinValidation",
                    "value": "False"
                  },
                  {
                    "key": "RequiresOrderHistoryValidation",
                    "value": "False"
                  },
                  {
                    "key": "DiscountAmount",
                    "value": "0"
                  },
                  {
                    "key": "DiscountType",
                    "value": "None"
                  },
                  {
                    "key": "FareQuote",
                    "value": "315.87"
                  },
                  {
                    "key": "FareQuoteAdjustmentAmount",
                    "value": "0"
                  },
                  {
                    "key": "UnitSupplierFee",
                    "value": "0"
                  },
                  {
                    "key": "UnitTax",
                    "value": "0"
                  },
                  {
                    "key": "ProgramCurrencyMinimumType",
                    "value": "Numeric"
                  },
                  {
                    "key": "ShortFallFactorType",
                    "value": "Multiply"
                  },
                  {
                    "key": "CrossOffFareQuote",
                    "value": "0"
                  },
                  {
                    "key": "PointCalculationFactor",
                    "value": "0"
                  }
                ],
                "redemption": {
                  "id": "511|7",
                  "name": "Pay in Cash",
                  "type": "Purchase",
                  "recommendation": {
                    "fee": {
                      "cash": 0.0,
                      "points": 0.0
                    },
                    "maxQuantity": 1,
                    "cash": 315.87,
                    "points": 0.0
                  },
                  "isEligible": true,
                  "ruleSet": {
                    "minimumPoints": 0.0,
                    "maximumPoints": 0.0,
                    "pointToCashFactor": {
                      "value": 0.0,
                      "operator": "Multiply"
                    },
                    "cashRoundingOff": 0.0,
                    "pointStepSize": 1.0,
                    "roundingType": "None"
                  },
                  "strikeOutValue": {
                    "cash": 0.0,
                    "points": 0.0
                  },
                  "actualValue": {
                    "cash": 315.87,
                    "points": 0.0
                  },
                  "stateBag": [
                    {
                      "key": "IsTotalFareEquivalentToNetFare",
                      "value": "False"
                    },
                    {
                      "key": "RequiresBinValidation",
                      "value": "False"
                    },
                    {
                      "key": "RequiresOrderHistoryValidation",
                      "value": "False"
                    },
                    {
                      "key": "DiscountAmount",
                      "value": "0"
                    },
                    {
                      "key": "DiscountType",
                      "value": "None"
                    },
                    {
                      "key": "FareQuote",
                      "value": "315.87"
                    },
                    {
                      "key": "FareQuoteAdjustmentAmount",
                      "value": "0"
                    },
                    {
                      "key": "UnitSupplierFee",
                      "value": "0"
                    },
                    {
                      "key": "UnitTax",
                      "value": "0"
                    },
                    {
                      "key": "ProgramCurrencyMinimumType",
                      "value": "Numeric"
                    },
                    {
                      "key": "ShortFallFactorType",
                      "value": "Multiply"
                    },
                    {
                      "key": "CrossOffFareQuote",
                      "value": "0"
                    },
                    {
                      "key": "PointCalculationFactor",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          },
          "policies": [
            {
              "type": "General",
              "text": "Smoke Free|4 Doors|5 Seats|Automatic|Air Conditioning|Holds 1 large, 1 small suitcases|27 mpg|Bluetooth/SYNC|Back-up Camera|image=2020-kia-rio-s-sedan-silver.png|thumb=2020-kia-rio-s-sedan-silver.png|cargroup=A|category=Economy"
            }
          ],
          "cancellationPolicy": {
            "text": "Changes or cancellations can be made online from your Trip Confirmation page or by calling us at 1-866-951-6592. Change or cancellation fees may apply. Changes or cancellations made directly with the car rental agency will forfeit any refund. \n Cancellations can be made online more than three (3) days prior to pick up date, unless otherwise stated. \n Cancellations received less than three (3) days prior to pick-up date will be subject to a rental car agency cancellation fee equal to one-day average per day rental cost based on your reservation. \n Any fees charged at the time of your booking will not be refunded. \n \tIf you fail to pick-up your rental vehicle on time, all payments will be forfeited. Cancellation fees, rental terms, and any additional fees are subject to change without notice and may vary by location and may be charged to the customer at pick up. Call the rental car agency directly to arrange for late arrival, if available. \n Renters must have a valid driver's license, major credit card and some rental car agencies require a good driving record. Most rental car agencies do not accept debit cards. Minimum age requirements may vary and there may be a maximum age. Call us or the rental car agency directly for more information. \n \tFor reservation modifications, you will need to cancel your existing booking  first and rebook at current rates and availability. \n If you cancel within the permissible timeframe, keep in mind that it typically takes up to 2 billing cycles for us to receive the refund from the vendor and for it to appear in your account(s). We'll issue the refunds in the original form of payment. \n When the reservation is modified and rebooked, the original rate may no longer be available and the current rate may be higher than the amount originally booked. The cardholder is responsible for paying the current rate.",
            "penaltyRules": [
              {
                "value": 1.0,
                "valueType": "Day",
                "estimatedValue": 52.64,
                "window": {
                  "start": "2022-12-09T10:30:00",
                  "end": "2022-12-12T10:30:00"
                }
              }
            ]
          },
          "mileage": {
            "isUnlimited": true,
            "allowed": []
          },
          "freeCancellationEndDate": "2022-12-09T10:29:59",
          "recommendationScore": 50
        }
      ],
      "vendors": [
        {
          "code": "AL",
          "name": "Alamo",
          "policies": [
            {
              "type": "Additional Driver",
              "text": "All additional drivers must meet all rental requirements.  Additional drivers must appear at the rental counter with the primary renter.  Additional drivers must sign the rental agreement.  An additional daily fee may apply for any Additional Drivers.\nThe additional driver can only be added to the contract at the pick up location. Note-  State law in California, Illinois, Missouri, Nevada, Oregon, and Wisconsin allow the spouse to be an automatic authorized driver as long as renter requirements are met.\n"
            },
            {
              "type": "Cross Border Policy",
              "text": "Vehicles rented in the US can be driven throughout the US and Canada.\n\nMost locations do not allow travel into Mexico. If you wish to travel into Mexico, you will be required to purchase additional insurance to cover the vehicle while in Mexico. Please contact the branch directly to determine limitations and availability.\n"
            },
            {
              "type": "Damage Waiver",
              "text": "Collision Damage Waiver (CDW) is not insurance.  The purchase of CDW is optional and not required in order to rent a vehicle.\n\nYou may purchase optional CDW for an additional fee.  If you purchase CDW we agree, subject to the actions that invalidate CDW listed on the rental agreement, to contractually waive your responsibility for all or part of the cost of damage to, loss or theft of, the vehicle. DW does not apply to damage occurring in Mexico.\n\nWhen deciding whether or not to purchase DW, you may wish to check with your insurance representative or credit card company to determine whether, in the event of damage to, or theft of, vehicle, you have coverage or protection for such damage or theft and the amount of your deductible or out-of-pocket risk. \n"
            },
            {
              "type": "Debit Card Policy",
              "text": "Deplaning passengers - debit cards are accepted at this airport location at the time of rental with proof of a confirmed round trip airline ticket disclosing a return date, and showing the renters name. A deposit for the cost of the rental will be taken and the funds will not be available for your use until after the vehicle has been returned. Renters using a debit card may not rent luxury or large SUV. License and debit card must be in the renters name.\n\nLocal customers - this location accepts debit cards from local renters without proof of round trip airline ticket with the following requirements - verifiable proof of employment, verifiable home phone or cell phone and utilities in renters name. Location must be able to verify renters name and home address by matching drivers license to name and address listed on current utility, phone, or cable bill. Bill cannot reflect an unpaid previous month balance. Reservations must be booked 72 hours in advance. The renter must qualify in person 48 hours prior to pickup by bringing the required documents to the rental branch. A deposit for the cost of the rental will be taken and must be maintained throughout the rental period. The funds will not be available for your use until after the vehicle has been returned and your bank has applied the money back to your account. Renters using a debit card may not rent anything larger than a full size vehicle. License and debit card must be in the renters name. Alamo is not responsible for any overdraft fees incurred. Cash is not an acceptable method of deposit. Prepaid debit cards or prepaid gift cards are not acceptable methods of deposit.\n"
            },
            {
              "type": "Extended Protection",
              "text": "The purchase of Extended Protection (EP) is optional and not required in order to rent a vehicle.\n\nThis is a summary only and is subject to all provisions, limitations, exceptions and exclusions of the EP policy. Upon request, a copy of the policy is available for review. EP may provide a duplication of coverage already furnished under a personal insurance policy or some other source. Owner’s employees, agents or endorsees are not qualified to evaluate the adequacy of renter’s existing coverage.\n\nOptional EP provides you with minimum financial responsibility limits (at no charge to you) as outlined in the applicable motor vehicle financial responsibility laws of the state where the vehicle is operated AND excess insurance provided by the insurance policy. This supplies you and any authorized drivers with third-party liability protection with a combined single limit per accident equal to the difference between the minimum financial responsibility limits referenced above and $1,000,000 Combined Single Limit per accident. EP will respond to third party accident claims that result from bodily injury, including death, and property damage that arise from the use or operation of the vehicle as permitted in the Rental Agreement. The policy does not provide coverage for any loss arising from the use or operation of Vehicle in Mexico.\n"
            },
            {
              "type": "Refueling Service",
              "text": "As a customer, you have a choice as to how you would like to pay for fuel. Option 1 -  Prepay Fuel --This option allows the renter to pay for the full tank of gas at the time of rental and return the tank empty. No refunds will be issued for unused gas. Option 2 -  We Refill. --This option allows the renter to pay Alamo at the end of the rental for gas used but not replaced. Price per gallon will be higher than local fuel prices. Option 3 -  You Refill. --This option allows the renter to return the vehicle with a full tank of gas to avoid extra fuel charges.\n"
            },
            {
              "type": "Personal Accident/Effects Coverage",
              "text": "Personal Accident Insurance/Personal Effects Coverage (PAI/PEC) is offered at the time of rental for an additional daily charge. If accepted, the PAI contained in the policy provides renter and renter's passengers with accidental death, accident medical expenses and ambulance expense benefits. The PEC contained in the policy insures the personal effects of the renter, additional drivers or any member of the renter's immediate family who permanently resides in the renter's household and who is traveling with the renter against risks of loss or damage. Benefits are payable in addition to any other insurance coverage the renter or passengers may have. This is a summary only. PAI/PEC is subject to the provisions, limitations and exclusions of the PAI/PEC policy underwritten by Empire Fire and Marine Insurance Company in the United States or ACE INC Insurance in Canada. The purchase of PAI/PEC is optional and not required to rent a car. The coverage provided by PAI/PEC may duplicate the renter's existing coverage. Alamo is not qualified to evaluate the adequacy of the renter's existing coverage; therefore, the renter should examine his or her personal insurance policies or other sources of coverage that may duplicate the coverage provided by PAI/PEC.\n\nhttps://www.nationalcar.com\n\nThis is a link\n"
            },
            {
              "type": "Forms of Payment",
              "text": "Credit Card - A credit card, with available credit and in the renter's name, must be presented. The signature on the back must match the name imprinted on the card. In addition, if the renter has an online transaction, the number and name printed on the card presented by renter must match the name and number stored for the online transaction. Credit Cards honored - American Express, MasterCard, VISA, Discover, JCB. Puerto Rico --The following credit cards are accepted for rentals in Puerto Rico-- American Express, MasterCard, VISA, Diners Club, Discover.  Pay Now Reservations --Pay Now reservations cannot be modified, changed or cancelled online; you must call 1-800 GO ALAMO -800-462-5266-. Changes to pickup and-or drop-off location will require a cancellation of the original reservation and re-booking of new reservation with current rates. If the reservation is cancelled more than 24 hours before the pick up time, a 5.00 USD cancellation fee will be assessed. If the reservation is cancelled within 24 hours of the pick up or is not picked up at all, a 10.00 USD no-show fee will be assessed. Any optional insurance or CDW product selected at the time of reservation may be cancelled at the counter at the time of rental without incurring a cancellation fee.\n\nGuaranteed Reservations-- A -Guaranteed Reservation- may be required for specialty vehicle reservations, such as minivan, SUV, and convertible car classes at all Corporate locations and at participating licensee locations. During booking, vehicles that display the message -This vehicle requires a credit card for creating the reservation- will be considered a -Guaranteed Reservation-.  If a guaranteed reservation is required for your trip, credit card information will be secured. Cancellations are accepted up to 24 hours before reservation date and time. If a Guaranteed Reservation is cancelled more than 24 hours before the pick-up time, no cancellation fee will be assessed. If the reservation is cancelled within 24 hours of the pick up or if the reservation is not used, a 50.00 USD cancellation fee will apply.\n"
            },
            {
              "type": "Roadside Plus",
              "text": "Renter may purchase Roadside Plus (RSP) from Owner for an additional fee. If Renter purchases RSP, Owner agrees, subject to the actions that invalidate Collision Damage Waiver, to contractually waive Renter’s responsibility for the cost to provide 24/7 roadside assistance (where available) which includes replacement of lost keys (including remote entry devices), flat tire service (if no inflated spare is available, the vehicle will be towed. Cost of a replacement tire is not covered by RSP), lockout service (if the keys are locked inside the vehicle), jumpstarts, and fuel delivery service for up to 3 gallons (or equivalent liters) of fuel if Vehicle is out of fuel. Roadside Plus services are only available in the United States and Canada. If Renter does not purchase RSP, or RSP is invalidated as set forth above, roadside assistance will be available, but standard charges will apply. RSP does not apply in Mexico. For roadside assistance call 1-800-803-4444.\n\nView Product Information\n"
            },
            {
              "type": "Shuttle / Arrival",
              "text": "YOUR ALAMO RENTAL WILL BE SERVICED BY NATIONAL CAR RENTAL, OUR DRIVE ALLIANCE PARTNER LOCATION. PLEASE FOLLOW SIGNS TO THE AIR TRAIN AND DEPART AT FEDERAL CIRCLE. PROCEED TO THE FIRST FLOOR MAKE A RIGHT AND GO TO THE NATIONAL RENTAL COUNTER.\n"
            },
            {
              "type": "Toll Pass Convenience Charge",
              "text": "Our TollPass Program is our electronic toll collection program which allows our renters to drive through electronic toll lanes and pay tolls electronically, without having to stop and pay cash. In addition, many toll plazas have converted to all electronic tolling and removed the option for travelers to stop and pay cash at toll plazas.\n\nThe TollPass Program is offered in different ways, depending on where you rent. Visit the websites below for more information.\n\n• Northeast US (including regions in the Midwest):\n\nhttps://www.alamo.com/en_US/car-rental-faqs/toll-charges/northeast-us-tolls.html\n\n\n• Massachusetts:\n\nhttps://www.alamo.com/en_US/car-rental-faqs/toll-charges/massachusetts-toll-options.html\n\n\n• Chicago Metropolitan Area:\n\nhttps://www.alamo.com/en_US/car-rental-faqs/toll-charges/chicago-toll-pass-program.html\n\n\n• Golden Gate Bridge and Northern California Bay Area:\n\nhttps://www.alamo.com/en_US/car-rental-faqs/toll-charges/northern-california-toll-options.html\n\n\n• Southern California:\n\n https://www.alamo.com/en_US/car-rental-faqs/toll-charges/southern-california-toll-options.html\n\n\n• CO, FL, TX, NC, GA, WA, PR, and Ontario Canada:\n\n https://www.alamo.com/en_US/car-rental-faqs/toll-charges/other-state-toll-options.html\n\n\n• Louisville KY:\n\nhttps://www.alamo.com/en_US/car-rental-faqs/toll-charges/indiana-kentucky-toll-options.html\n\n• Utah:\n\nhttps://www.alamo.com/en_US/car-rental-faqs/toll-charges/utah-toll-options.html\n\nTo view our entire coverage map, go to https://www.alamo.com/en_US/car-rental-faqs/toll-charges.html and click on Coverage Map.\n\n\nTollPass products not available at all locations or at locations operated by a Licensee. Please refer to your rental locations policies and/or offerings for toll products to determine availability of TollPass\n"
            }
          ],
          "logo": "https://car-vendor-logo.stage.cnxloyalty.com/78x37/AL.jpg"
        },
        {
          "code": "ZI",
          "name": "Avis",
          "policies": [],
          "logo": "https://car-vendor-logo.stage.cnxloyalty.com/78x37/ZI.jpg"
        },
        {
          "code": "ZD",
          "name": "Budget",
          "policies": [],
          "logo": "https://car-vendor-logo.stage.cnxloyalty.com/78x37/ZD.jpg"
        }
      ],
      "rentalLocations": [
        {
          "id": "97dc139380f8d366b1fe4732e01ca9d0",
          "code": "JFKT71",
          "name": "JFK INTL AIRPORT",
          "inTerminal": true,
          "atAirport": true,
          "shuttle": "Unknown",
          "hoursOfOperation": [
            {
              "dayOfWeek": "Sun",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            },
            {
              "dayOfWeek": "Mon",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            },
            {
              "dayOfWeek": "Tue",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            },
            {
              "dayOfWeek": "Wed",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            },
            {
              "dayOfWeek": "Thu",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            },
            {
              "dayOfWeek": "Fri",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            },
            {
              "dayOfWeek": "Sat",
              "workingHours": [
                {
                  "openTime": "06:00:00",
                  "closeTime": "23:00:00"
                }
              ]
            }
          ],
          "contactInfo": {
            "address": {
              "line1": "BUILDING 308 FEDERAL CIRCLE",
              "line2": "",
              "cityName": "JAMAICA",
              "state": {
                "code": "NY",
                "name": ""
              },
              "countryCode": "US",
              "postalCode": "11430"
            },
            "phone": {
              "type": "Unknown",
              "number": "8446481611"
            }
          },
          "geoCode": {
            "lat": 40.665417,
            "long": -73.808703
          }
        },
        {
          "id": "390912e04b749bb0e5ff31379f53705f",
          "code": "JFKT01",
          "name": "John F Kennedy Intl Airport",
          "inTerminal": false,
          "atAirport": true,
          "shuttle": "Unknown",
          "hoursOfOperation": [
            {
              "dayOfWeek": "Sun",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Mon",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Tue",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Wed",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Thu",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Fri",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Sat",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            }
          ],
          "contactInfo": {
            "address": {
              "line1": "305 Federal Circle",
              "cityName": "Jamaica",
              "state": {
                "code": "NY",
                "name": "New York"
              },
              "countryCode": "US",
              "postalCode": "11430"
            },
            "phone": {
              "type": "Unknown",
              "number": "(1) 718-244-5400"
            }
          },
          "geoCode": {
            "lat": 40.66007,
            "long": -73.80406
          }
        },
        {
          "id": "f2000ff54cc27f77920bf4d3d3f4f6c6",
          "code": "JFKT02",
          "name": "JFK AIRPORT NY",
          "inTerminal": false,
          "atAirport": true,
          "shuttle": "Unknown",
          "hoursOfOperation": [
            {
              "dayOfWeek": "Sun",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Mon",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Tue",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Wed",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Thu",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Fri",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            },
            {
              "dayOfWeek": "Sat",
              "workingHours": [
                {
                  "openTime": "00:00:00",
                  "closeTime": "23:59:59"
                }
              ]
            }
          ],
          "contactInfo": {
            "address": {
              "line1": "BUILDING 305 FEDERAL CIRCLE, JFK AIRPORT",
              "cityName": "JAMAICA",
              "state": {
                "code": "NY"
              },
              "countryCode": "US",
              "postalCode": "11430"
            },
            "phone": {
              "type": "Unknown",
              "number": "718-656-1890"
            }
          },
          "geoCode": {
            "lat": 40.65874,
            "long": -73.80287
          }
        }
      ],
      "vehicles": [
        {
          "sippCode": "CCAR",
          "refId": "dfcb2db5-c972-4eae-91dd-68b48de0243e",
          "name": "NISSAN VERSA OR SIMILAR",
          "category": "TwoOrFourDoorVehicle",
          "type": "Compact",
          "transmission": "Automatic",
          "desc": "NISSAN VERSA OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/CARS/CCAR.doi.320.low.imageLargeSideProfileNodePath.png/1611613117411.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "SFAR",
          "refId": "2cf656e3-66ad-43d2-bb8a-8061334fe7cb",
          "name": "FORD EDGE OR SIMILAR",
          "category": "Suv",
          "type": "Standard",
          "transmission": "Automatic",
          "desc": "FORD EDGE OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/SUVS/SFAR.doi.320.low.imageLargeSideProfileNodePath.png/1551905658879.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "5",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "PCAR",
          "refId": "0ba3c00a-3288-4d7a-a995-85261e197659",
          "name": "NISSAN MAXIMA OR SIMILAR",
          "category": "TwoOrFourDoorVehicle",
          "type": "Premium",
          "transmission": "Automatic",
          "desc": "NISSAN MAXIMA OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/CARS/PCAR.doi.320.low.imageLargeSideProfileNodePath.png/1574880326763.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "4",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "SCAR",
          "refId": "36fee3c4-7363-4438-bc2c-cb5299388f1a",
          "name": "VW JETTA OR SIMILAR",
          "category": "TwoOrFourDoorVehicle",
          "type": "Standard",
          "transmission": "Automatic",
          "desc": "VW JETTA OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/CARS/SCAR.doi.320.low.imageLargeSideProfileNodePath.png/1544210775124.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "3",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "ECAR",
          "refId": "d0dd4b49-8369-4d60-8cd9-d24f36b7deeb",
          "name": "MITSUBISHI MIRAGE OR SIMILAR",
          "category": "TwoOrFourDoorVehicle",
          "type": "Economy",
          "transmission": "Automatic",
          "desc": "MITSUBISHI MIRAGE OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/CARS/ECAR.doi.320.low.imageLargeSideProfileNodePath.png/1492780366644.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "4",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "FFAR",
          "refId": "dc9dedec-8d3b-42c3-9491-fcd4df9f6bc8",
          "name": "CHEVY TAHOE OR SIMILAR",
          "category": "Suv",
          "type": "Fullsize",
          "transmission": "Automatic",
          "desc": "CHEVY TAHOE OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/SUVS/FFAR.doi.320.low.imageLargeSideProfileNodePath.png/1618262877780.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "3",
          "passengerCapacity": "7",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "IFAR",
          "refId": "dc532232-7907-4683-a1aa-f311b27632e5",
          "name": "NISSAN ROGUE OR SIMILAR",
          "category": "Suv",
          "type": "Intermediate",
          "transmission": "Automatic",
          "desc": "NISSAN ROGUE OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/SUVS/IFAR.doi.320.low.imageLargeSideProfileNodePath.png/1618262879727.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "4",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "ICAR",
          "refId": "b2f2c20b-e1de-4ff9-9fc6-fc17a3ddf551",
          "name": "TOYOTA COROLLA OR SIMILAR",
          "category": "TwoOrFourDoorVehicle",
          "type": "Intermediate",
          "transmission": "Automatic",
          "desc": "TOYOTA COROLLA OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/CARS/ICAR.doi.320.low.imageLargeSideProfileNodePath.png/1620230914227.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "3",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "FCAR",
          "refId": "8bf040da-5fd7-481d-850e-3c4d2aa63355",
          "name": "CHEVROLET MALIBU OR SIMILAR",
          "category": "TwoOrFourDoorVehicle",
          "type": "Fullsize",
          "transmission": "Automatic",
          "desc": "CHEVROLET MALIBU OR SIMILAR",
          "images": [
            "https://assets.gcs.ehi.com/content/alamo/data/vehicle/bookingCountries/US/CARS/FCAR.doi.320.low.imageLargeSideProfileNodePath.png/1618262777765.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "4",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "CCAR",
          "refId": "93a34d28-2198-4234-86e5-7df8ff734944",
          "name": "Group B - Kia Soul or similar",
          "category": "TwoOrFourDoorVehicle",
          "type": "Compact",
          "transmission": "Automatic",
          "images": [
            "https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-black.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "ICAR",
          "refId": "2302e3e5-e66a-49b5-b645-48a4e2990e40",
          "name": "Group C - Toyota Corolla or similar",
          "category": "TwoOrFourDoorVehicle",
          "type": "Intermediate",
          "transmission": "Automatic",
          "images": [
            "https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-grey.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "FCAR",
          "refId": "e7f13b6e-d503-4b46-b021-c2707101c06d",
          "name": "Group E - Toyota Camry or similar",
          "category": "TwoOrFourDoorVehicle",
          "type": "Fullsize",
          "transmission": "Automatic",
          "images": [
            "https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "SCAR",
          "refId": "a5cf4f6d-d16b-4985-adfc-f700c6534315",
          "name": "Group D - Volkswagen Jetta or similar",
          "category": "TwoOrFourDoorVehicle",
          "type": "Standard",
          "transmission": "Automatic",
          "images": [
            "https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-silver.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "CCAR",
          "refId": "f3753a2b-de3a-41a9-a96a-cff38561205a",
          "name": "Group B - Kia Soul or similar",
          "category": "TwoOrFourDoorVehicle",
          "type": "Compact",
          "transmission": "Automatic",
          "images": [
            "https://www.budget.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "2",
          "passengerCapacity": "5",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        },
        {
          "sippCode": "EDAR",
          "refId": "79c62fe5-20d1-4bcc-ac20-955b6ca92138",
          "name": "Group A - Kia Rio or similar",
          "category": "FourToFiveDoorVehicle",
          "type": "Economy",
          "transmission": "Automatic",
          "images": [
            "https://www.budget.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-silver.png"
          ],
          "airConditioned": true,
          "fuelType": "Unknown",
          "baggageCapacity": "1",
          "passengerCapacity": "5",
          "doorCount": "4",
          "driveType": "Unknown",
          "policies": [],
          "specialEquipment": []
        }
      ],
      "paging": {
        "totalRecords": 53,
        "pageNo": 1,
        "pageSize": 15
      },
      "sessionId": "40e75f26-d48b-4978-8d8a-67a469cd5631-CLNXT|1389"
    };
  }

  getActivitiesSearchMock() {
    return {
      "sessionId": "fbb1459e-dd23-42ba-bfde-a9ea3125ffca-ACNXT$1371",
      "activities": [
        {
          "id": "110804P56",
          "name": "Avalon City: A Self-Guided Audio Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/2a/69/38.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/2a/69/38.jpg",
                "caption": "Avalon City: A Self-Guided Audio Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "Take a self-guided GPS audio tour through the streets of Avalon with me. My name is Matthew and I am one of the 4000 residents of Avalon. Being a local I get asked a lot of questions. Do you live here full time? How expensive is it? What is that large house up on the hill? Why does everyone drive around in golf carts? How can you have a casino that doesn't allow gambling?<br><br>Along with historians, authors, and other passionate locals, we will walk the streets of Avalon to answer these questions and more. You'll learn the stories behind our town and its famous landmarks from the people who live here.<br><br>The tour is ready whenever you are and the audio plays automatically at exactly the right time and place using your smartphone's GPS and the VoiceMap mobile app, which also works offline.<br>",
            "duration": "50 minutes",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 8,
            "rating": 4.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 44.54,
            "breakUp": {
              "baseFareStartsFrom": 4.26,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 10.28
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "104204P430",
          "name": "Long Beach Bar Hunt: Long Beach Boss Bar Crawl",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/26/69/ed.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/26/69/ed.jpg",
                "caption": "Long Beach Bar Hunt: Long Beach Boss Bar Crawl"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Let’s Roam is the #1 app-led scavenger hunt company. Walk to all the best landmarks and hidden gems, answering trivia questions and solving challenges. Work with your team or compete against them, as you learn new facts and create memorable experiences. Let’s Roam Scavenger Hunts are great as an everyday activity, or for bachelorette parties, birthday parties, corporate team building events and more! Each player chooses an interactive role, with challenges varying by person.",
            "duration": "2 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 52.29,
            "breakUp": {
              "baseFareStartsFrom": 10.22,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 12.07
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "104204P108",
          "name": "Long Beach Scavenger Hunt: Long Beach Art & Architecture",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/26/68/d8.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/26/68/d8.jpg",
                "caption": "Long Beach Scavenger Hunt: Long Beach Art & Architecture"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Let’s Roam is the #1 app-led scavenger hunt company. Walk to all the best landmarks and hidden gems, answering trivia questions and solving challenges. Work with your team or compete against them, as you learn new facts and create memorable experiences. Let’s Roam Scavenger Hunts are great as an everyday activity, or for bachelorette parties, birthday parties, corporate team building events and more! Each player chooses an interactive role, with challenges varying by person.",
            "duration": "2 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 1,
            "rating": 5.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 52.29,
            "breakUp": {
              "baseFareStartsFrom": 10.22,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 12.07
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "30114P52",
          "name": "Long Beach Self-Guided Audio Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/7b/2a/79.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/7b/2a/79.jpg",
                "caption": "Long Beach Self-Guided Audio Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "This fascinating audio tour of the beautiful sunny and vibrant Long Beach in California will take you on a fun journey where you will see sights such as the magnificent RMS Queen Mary and the famous Long Beach Grand Prix.<br><br>Perfectly suited for discovery on foot, our self-guided audio tour allows you to set the pace and explore at your leisure as you uncover the stories of this exciting city.<br><br>On this tour you will see wonderful examples of architecture, important historical vessels and lots of free artwork generated by the people who live and work in the area.<br><br>To discover this marvellous city in your own time and at your own pace just download this vibrantly-narrated self-guided audio tour, pop in your headphones, open the map that comes with your download and start walking.<br><br>The tour will take approximately two hours, but you can pause the audio guide when needed. Grab a bite to eat or do some shopping along the way.<br><br>Please note that this tour is only available in English.<br>",
            "duration": "2 to 3 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 55.50,
            "breakUp": {
              "baseFareStartsFrom": 12.69,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 12.81
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "200006P266",
          "name": "Santa Ana Showdown Scavenger Hunt",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/5c/f7/f1.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0f/5c/f7/f1.jpg",
                "caption": "Santa Ana Showdown Scavenger Hunt"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Our very unique, immersive adventures are the only ones of their kind. We, unlike other companies, provide your very own remote, interactive, live host to assist and encourage you along. We are an Austin, TX-based global custom event design company offering scavenger hunts and other events in 150 cities in North America and beyond! Our specially hand-crafted adventures are equal parts tour, creative challenge, detective hunt, and social experiment! <br><br>Guests get to discover in an alternate reality our favorite hidden gems off the beaten trail and creatively interpret fun art, history, and culture clues - for points! They get to enjoy fame and glory while appearing on our website’s international leaderboard, no matter what their score. They get to essentially race other teams in other cities, even if they don’t have competitors who have signed up in their city! Get ready to local authors, experience the favorite hangouts only known by locals, discover unusual oddities, and so much more!",
            "duration": "2 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 63.19,
            "breakUp": {
              "baseFareStartsFrom": 18.61,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 14.58
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "200006P48",
          "name": "Long Beach Bash Scavenger Hunt",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/cf/97/9f.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/cf/97/9f.jpg",
                "caption": "Long Beach Bash Scavenger Hunt"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Our very unique, immersive adventures are the only ones of their kind. We, unlike other companies, provide your very own remote, interactive, live host to assist and encourage you along. We are an Austin, TX-based global custom event design company offering scavenger hunts and other events in 150 cities in North America and beyond! Our specially hand-crafted adventures are equal parts tour, creative challenge, detective hunt, and social experiment! <br><br>Guests get to discover in an alternate reality our favorite hidden gems off the beaten trail and creatively interpret fun art, history, and culture clues - for points! They get to enjoy fame and glory while appearing on our website’s international leaderboard, no matter what their score. They get to essentially race other teams in other cities, even if they don’t have competitors who have signed up in their city! Get ready to local authors, experience the favorite hangouts only known by locals, discover unusual oddities, and so much more!",
            "duration": "2 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 1,
            "rating": 5.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 64.34,
            "breakUp": {
              "baseFareStartsFrom": 19.49,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 14.85
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "359154P2",
          "name": "Haunted Catalina Ghost Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/48/78/69.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0f/48/78/69.jpg",
                "caption": "Haunted Catalina Ghost Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "Tour the historic Village of Avalon with our local historian. Together you will walk through Avalon while exploring the spooky history and paranormal mysteries of Catalina. Learn the difference between a spirit or a ghost. Understand why Catalina is so haunted, and why our guide has proof of the other side. This is the only Ghost Tour on Catalina and has been voted one of the Top Ten Ghost Tours in The Country from USA TODAY.",
            "duration": "1 hour 30 minutes",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 66.00,
            "breakUp": {
              "baseFareStartsFrom": 20.77,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 15.23
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "317031P4",
          "name": "Long Beach Self-Guided Bike Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/fa/87/c7.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/fa/87/c7.jpg",
                "caption": "Long Beach Self-Guided Bike Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Shoreline Village is located right on the edge of Rainbow Harbor, where you’re guaranteed to roll past a crowd of extravagant commercial and recreational ships before hitting the Pike, one of the most unique waterfront shopping centers in Southern California. After weaving through Pike and its surrounding points of interest, take off along the five-mile long Shoreline Pedestrian Bikeway. This paved bikeway takes you up the coast to Naples, a beautifully unique neighborhood of Long Beach appropriately named after its Italian roots.",
            "duration": "4 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 1,
            "rating": 5.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 67.08,
            "breakUp": {
              "baseFareStartsFrom": 21.6,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 15.48
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "317031P2",
          "name": "4-Wheel Surrey Cycle Rental in Long Beach Shoreline Village",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/fa/1a/37.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/fa/1a/37.jpg",
                "caption": "4-Wheel Surrey Cycle Rental in Long Beach Shoreline Village"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "4-Wheel Surrey cycles are as fun as they are unique! The flagship cycle of the Wheel Fun Rentals fleet, this modern day carriage is perfect for some one-on-one time with your significant other, or a fun outing with small children! Millions and millions of people have enjoyed our 4-wheeled cycles for over twenty years. Our four wheel Surreys create a memory that will last a lifetime.",
            "duration": "1 hour",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 1,
            "rating": 1.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 69.24,
            "breakUp": {
              "baseFareStartsFrom": 23.26,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 15.98
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "293546P1",
          "name": "Long Beach Fitness Tour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/fc/70/1f.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0c/fc/70/1f.jpg",
                "caption": "Long Beach Fitness Tour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "This is a regular meet up to stay fit, strong and create community. Join us with your own bike for free, we take gratuities and love gifts.",
            "duration": "2 to 3 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 76.79,
            "breakUp": {
              "baseFareStartsFrom": 29.07,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 17.72
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "130331P1",
          "name": "Fantastic Catalina Race",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "16",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/8e/23/8e.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/8e/23/8e.jpg",
                "caption": "Fantastic Catalina Race"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "NEW COVID PROTOCOLS: Players will need to follow all state and local guidelines while playing the Fantastic Catalina Race.<br><br>\"A Truly Amazing Race\"!! The Fantastic Catalina Race is a unique hybrid of a sightseeing tour and interactive mystery novel around Avalon. Our races are unlike anything you've ever done before, and we offer an experience you will never forget. Great for the whole family! Great for Groups!<br>",
            "duration": "1 hour 30 minutes",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 7,
            "rating": 3.6,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 98.40,
            "breakUp": {
              "baseFareStartsFrom": 45.69,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 22.71
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "6188P10",
          "name": "Los Angeles Highlights Tour from Seal Beach and Sunset Beach",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/f4/90/95.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0e/f4/90/95.jpg",
                "caption": "Los Angeles Highlights Tour from Seal Beach and Sunset Beach"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Staying in Seal Beach or Sunset Beach and want to explore Los Angeles but don't have much time? Then check out this highlights tour of Los Angeles . See downtown Los Angeles, the Sunset Strip, the Hollywood Sign and the TCL Chinese Theatre as you listen to narration by your informative guide. Visit movie locations featured in blockbusters including ‘King Kong,’ ‘Armageddon’ and ‘Independence Day. ’City of Beverly Hills, Santa Monica and Venice Beach. With hotel pickup and drop-off included, this is a convenient way to cover lots of can’t-miss Los Angeles landmarks in a relatively short period of time. <br><br>This small-group tour is limited to 14 people to ensure more individualized attention from your guide.",
            "duration": "8 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 168.10,
            "breakUp": {
              "baseFareStartsFrom": 99.31,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 38.79
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "292381P1",
          "name": "Long Beach California Vintage Moped Rental 24-Hour",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/82/48/94.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/82/48/94.jpg",
                "caption": "Long Beach California Vintage Moped Rental 24-Hour"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "We provide our customers with amazing and unique experiences of Long Beach California from the usage of our classic Vespa scooters or our collection of vintage mopeds. Our equipment looks feels and sounds cool. Just looking at one in person and makes you involuntarily smile from pure joy.",
            "duration": "1 day",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 168.79,
            "breakUp": {
              "baseFareStartsFrom": 99.84,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 38.95
                }
              ]
            },
            "isRefundable": false
          }
        },
        {
          "id": "147508P131",
          "name": "Hire Photographer, Professional Photo Shoot - Long Beach",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0d/bd/85/68.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0d/bd/85/68.jpg",
                "caption": "Hire Photographer, Professional Photo Shoot - Long Beach"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Glamorous professional photo shoot in unique Long Beach locations. <br>The Photo Experience will create amazing photo memories from your visit. You will be able to see undiscovered locations, and get the best photo story from your Long Beach visit. We can tailor each photo shoot to meet your requirements. <br><br>Our Photoshoots are ideal for any Tourists <br><br>- Solo Traveler<br>- Couples<br>- Groups <br>- Hen/Bachelorette & Stag/Bachelor Parties<br>- Families <br>- Secret proposal/Engagement <br>- Honeymoon <br>- Experienced Influencers and Models<br>- New Influencers and Models<br><br>What's Included:<br>A Private online viewing gallery <br>- 1 hour = 20 professionally edited photos*<br>- 2 hours = 30 professionally edited photos*<br>- 3 hours = 40 professionally edited photos*<br>- 4 hours = 50 professionally edited photos*<br>* same set of images <br><br>- A unique location professional shoot experience<br><br>- DELIVERY - Up to 14 days after photoshoot. <br><br>What's Excluded: <br>- Transportation <br>- Entry fees",
            "duration": "2 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 0,
            "rating": 0.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 186.97,
            "breakUp": {
              "baseFareStartsFrom": 113.82,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 43.15
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "351800P1",
          "name": "Mermaid Photo Shoot in Catalina Island",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "12",
              "name": "Tours & Sightseeing"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/f2/b7/dd.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0e/f2/b7/dd.jpg",
                "caption": "Mermaid Photo Shoot in Catalina Island"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Catalina Island"
                }
              },
              "geoCode": {
                "lat": 33.38789,
                "long": -118.41631
              }
            },
            "summary": "You will never forget how you feel when you put on a mermaid tail for the first time! It is so easy to let your inner goddess shine during this photoshoot. You will feel empowered, beautiful, and whimsical. We capture genuine smiles after your nervousness transforms into laughter and enjoyment! Our mermaid tails extend up past your belly button, giving you a very flattering silhouette. We offer all sizes for children, even toddlers, as well as women sizes 0-22. Mer-men are welcome with sizing available from S-XXXL.",
            "duration": "1 hour",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 2,
            "rating": 3.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 196.83,
            "breakUp": {
              "baseFareStartsFrom": 121.41,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 30.0
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 45.42
                }
              ]
            },
            "isRefundable": true
          }
        },
        {
          "id": "182253P1",
          "name": "3 Hour Sailing Lesson: Rainbow Harbor Long Beach to the Pacific Ocean",
          "supplierId": "36cj0ou718g",
          "categories": [
            {
              "id": "17",
              "name": "Outdoor Activities"
            }
          ],
          "content": {
            "media": {
              "primaryImage": {
                "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/38/f1/64.jpg",
                "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/38/f1/64.jpg",
                "caption": "3 Hour Sailing Lesson: Rainbow Harbor Long Beach to the Pacific Ocean"
              },
              "images": []
            },
            "location": {
              "address": {
                "state": {
                  "name": "California"
                },
                "countryCode": "US",
                "city": {
                  "name": "Long Beach",
                  "code": "LGB"
                }
              },
              "geoCode": {
                "lat": 33.7683,
                "long": -118.1956
              }
            },
            "summary": "Beginner to Advanced Sailing Lesson/ Instruction, for Up to 6 Passengers. No Experience Needed, All Ages, Animals/ Pets Allowed",
            "duration": "3 hours",
            "notes": [],
            "inclusions": [],
            "exclusions": [],
            "displayInfos": [],
            "policies": [],
            "reviews": [],
            "ratingsCount": [],
            "reviewCount": 1,
            "rating": 5.0,
            "maxPassengerCount": 0,
            "offers": []
          },
          "bookingQuestions": [],
          "fareType": "Negotiated",
          "displayFare": {
            "currency": "USD",
            "totalFareStartsFrom": 564.25,
            "breakUp": {
              "baseFareStartsFrom": 394.58,
              "taxes": [],
              "fees": [],
              "discounts": [],
              "markups": [
                {
                  "source": "Agency",
                  "desc": "Agency",
                  "amount": 39.46
                },
                {
                  "source": "Agency",
                  "desc": "Partner Markup",
                  "amount": 130.21
                }
              ]
            },
            "isRefundable": true
          }
        }
      ],
      "paging": {
        "pageNo": 1,
        "pageSize": 30,
        "totalRecords": 16
      }
    };
  }
}
