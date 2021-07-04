class RangeList {
    constructor() {
        this.rangeList = []
    }

    add(range) {
        let rangeStart = range[0]
        let rangeEnd = range[1]
    if (rangeStart >= rangeEnd) return
    let newRangeList = []
    let i = 0

    while (i < this.rangeList.length) {
        let currRange = this.rangeList[i]
        let currStart = currRange[0]
        let currEnd = currRange[1]

        if (rangeStart > currEnd) {
            newRangeList.push(currRange)
            i++
        } else {
            if (rangeStart > currStart) {
                rangeStart = currStart
            }
            break
        }
    }

    const startIndex = i
    while (i < this.rangeList.length) {
        let currRange = this.rangeList[i]
        let currStart = currRange[0]
        let currEnd = currRange[1]

        if (rangeEnd > currEnd) {
            if (i != startIndex && i != this.rangeList.length - 1) {
                newRangeList.push(currRange)
            }
            i++
    } else {
        if (rangeEnd >= currStart) {
            rangeEnd = currEnd++
        }
        break
    }
}
    newRangeList.push([rangeStart, rangeEnd])
    this.rangeList = newRangeList.concat(this.rangeList.slice(i, this.rangeList.length))
}

remove(range) {
    let rangeStart = range[0]
    let rangeEnd = range[1]
    if (rangeStart >= rangeEnd) {
        return
    }
    let newRangeList = []
    let i = 0
    while (i < this.rangeList.length) {
        let currRange = this.rangeList[i]
        let currStart = currRange[0]
        let currEnd = currRange[1]

        if (rangeStart > currEnd) {
            newRangeList.push(currRange)
                i++
            } else { if (rangeStart > currStart) {
                newRangeList.push([currStart, rangeStart])
            }
            break
        }
}
    const startIndex = i
    while (i < this.rangeList.length) {
        let currRange = this.rangeList[i]
        let currStart = currRange[0]
        let currEnd = currRange[1]

        if (rangeEnd > currEnd) {
            i++
        } else {
            if (rangeEnd >= currStart) {
            if (rangeEnd != currEnd) {
                newRangeList.push([rangeEnd, currEnd])
            }
        } else {
            newRangeList.push(currRange)
        }
        i++
        break
    }
}
    this.rangeList = newRangeList.concat(this.rangeList.slice(i, this.rangeList.length))    
}

print() {
    let output = ''
    this.rangeList.forEach(function(currRange) {
        output += '[' + currRange[0] + ', ' + currRange[1] + ') '
    })

    console.log(output)
} 
}


        
