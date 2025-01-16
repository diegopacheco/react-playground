#!/bin/bash

export USE_WATCHMAN=false
npm test -- --watchAll=false --runInBand --detectOpenHandles