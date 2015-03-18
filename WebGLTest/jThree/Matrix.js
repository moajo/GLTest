var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../_references.ts"/>
var jThree;
(function (jThree) {
    var Matrix;
    (function (_Matrix) {
        var JThreeObject = jThree.Base.jThreeObject;
        var Vector4 = jThree.Mathematics.Vector.Vector4;
        var MatrixEnumerator = (function (_super) {
            __extends(MatrixEnumerator, _super);
            function MatrixEnumerator(targetMat) {
                _super.call(this);
                this.currentIndex = -1;
                this.targetMat = targetMat;
            }
            MatrixEnumerator.prototype.getCurrent = function () {
                return this.targetMat.getBySingleIndex(this.currentIndex);
            };
            MatrixEnumerator.prototype.next = function () {
                this.currentIndex++;
                if (this.currentIndex >= 0 && this.currentIndex < 16)
                    return true;
                return false;
            };
            return MatrixEnumerator;
        })(JThreeObject);
        var MatrixBase = (function (_super) {
            __extends(MatrixBase, _super);
            function MatrixBase() {
                _super.apply(this, arguments);
            }
            MatrixBase.prototype.getEnumrator = function () {
                throw new Error("Not implemented");
            };
            return MatrixBase;
        })(JThreeObject);
        _Matrix.MatrixBase = MatrixBase;
        var Matrix = (function (_super) {
            __extends(Matrix, _super);
            function Matrix(arr) {
                _super.call(this);
                this.elements = Matrix.zeroElements();
                if (!this.isValidArray(arr))
                    throw new jThree.Exceptions.InvalidArgumentException("Invalid matrix source was passed.");
                this.elements = arr;
            }
            Matrix.zero = function () {
                return new Matrix(this.zeroElements());
            };
            Matrix.identity = function () {
                return new Matrix(this.identityElements());
            };
            Matrix.zeroElements = function () {
                return new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            };
            Matrix.identityElements = function () {
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            };
            Matrix.prototype.isValidArray = function (arr) {
                if (arr.length !== 16)
                    return false;
                return true;
            };
            Matrix.prototype.getAt = function (colmun, row) {
                return this.elements.get(colmun + row * 4);
            };
            Matrix.prototype.getBySingleIndex = function (index) {
                return this.elements[index];
            };
            Matrix.prototype.getColmun = function (col) {
                return new Vector4(this.elements[col], this.elements[col + 4], this.elements[col + 8], this.elements[col + 12]);
            };
            Matrix.prototype.getRow = function (row) {
                return new Vector4(this.elements[row * 4], this.elements[row * 4 + 1], this.elements[row * 4 + 2], this.elements[row * 4 + 3]);
            };
            Matrix.prototype.toString = function () {
                return "|{0} {1} {2} {3}|\n|{4} {5} {6} {7}|\n|{8} {9} {10} {11}|\n|{12} {13} {14} {15}|".format(this.getBySingleIndex(0), this.getBySingleIndex(1), this.getBySingleIndex(2), this.getBySingleIndex(3), this.getBySingleIndex(4), this.getBySingleIndex(5), this.getBySingleIndex(6), this.getBySingleIndex(7), this.getBySingleIndex(8), this.getBySingleIndex(9), this.getBySingleIndex(10), this.getBySingleIndex(11), this.getBySingleIndex(12), this.getBySingleIndex(13), this.getBySingleIndex(14), this.getBySingleIndex(15));
            };
            Matrix.prototype.getEnumrator = function () {
                return new MatrixEnumerator(this);
            };
            return Matrix;
        })(MatrixBase);
        _Matrix.Matrix = Matrix;
    })(Matrix = jThree.Matrix || (jThree.Matrix = {}));
})(jThree || (jThree = {}));
//# sourceMappingURL=Matrix.js.map