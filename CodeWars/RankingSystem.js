class User {

    constructor() {
        this.rank = -8
        this.progress = 0;
    }

    incProgress(puzzRank) {
        if (puzzRank > 8 || puzzRank < -8 || puzzRank === 0) throw console.error("Erroneous Rank")

        const points = this.calculatePoints(puzzRank)

        if (points === 0) {
            return
        }
        this.progress += points
        const {progress, rank} = this.incRank(this.progress, this.rank)

        this.progress = progress
        this.rank = rank
    }

    calculatePoints(puzzRank) {

        var difference = this.rank - puzzRank
        const negativeRank = this.rank < 0
        const positiveRank = this.rank > 0

        if (negativeRank && puzzRank > 0) difference++;
        else if (positiveRank && puzzRank < 0 ) difference--;

        if (difference > 1) return 0
        else if (difference === 1) return 1
        else if (difference === 0) return 3

        return 10 * difference * difference
    }

    incRank(progress, rank) {
        if (rank == 8) {
            progress = 0
            return {progress, rank}
        }

        if (progress >= 100 && rank == -1) {
            rank += 2
        } else if (progress >= 100) {
            rank++
        } else return {progress, rank}

        const leftover = progress - 100
        progress = leftover

        return this.incRank(progress, rank)
    }

}

module.exports = {
    User
}