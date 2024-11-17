/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseJavaCstVisitorWithDefaults, } from 'java-parser';
function storeComments(ctx, comments) {
    const attrNames = Object.keys(ctx);
    for (let i = 0, numAttrNames = attrNames.length; i < numAttrNames; i++) {
        const attrName = attrNames[i];
        const attrValues = ctx[attrName];
        for (let j = 0, numAttrValues = attrValues.length; j < numAttrValues; j++) {
            const attrValue = attrValues[j];
            if (attrValue.leadingComments != null && attrValue.leadingComments.length > 0) {
                comments.push(...attrValue.leadingComments);
            }
            if (attrValue.trailingComments != null && attrValue.trailingComments.length > 0) {
                comments.push(...attrValue.trailingComments);
            }
        }
    }
}
export const LINE_COMMENT = 13;
export const TRADITIONAL_COMMENT = 14;
export class JavaCommentVisitor extends BaseJavaCstVisitorWithDefaults {
    constructor() {
        super();
        this.validateVisitor();
    }
    visit(cstNode, param) {
        if (param == null) {
            param = [];
        }
        super.visit(cstNode, param);
        // Note that `IToken.tokenTypeIdx` should be:
        //  - 13 for LineComment
        //  - 14 for TraditionalComment
        //  - else otherwise.
        const comments = param
            .filter((token) => token.tokenTypeIdx === LINE_COMMENT || token.tokenTypeIdx === TRADITIONAL_COMMENT)
            .sort((a, b) => a.startOffset - b.startOffset);
        return comments;
    }
    typeIdentifier(ctx, param) {
        storeComments(ctx, param);
        return super.typeIdentifier(ctx, param);
    }
    literal(ctx, param) {
        storeComments(ctx, param);
        return super.literal(ctx, param);
    }
    integerLiteral(ctx, param) {
        storeComments(ctx, param);
        return super.integerLiteral(ctx, param);
    }
    floatingPointLiteral(ctx, param) {
        storeComments(ctx, param);
        return super.floatingPointLiteral(ctx, param);
    }
    booleanLiteral(ctx, param) {
        storeComments(ctx, param);
        return super.booleanLiteral(ctx, param);
    }
    primitiveType(ctx, param) {
        storeComments(ctx, param);
        return super.primitiveType(ctx, param);
    }
    numericType(ctx, param) {
        storeComments(ctx, param);
        return super.numericType(ctx, param);
    }
    integralType(ctx, param) {
        storeComments(ctx, param);
        return super.integralType(ctx, param);
    }
    floatingPointType(ctx, param) {
        storeComments(ctx, param);
        return super.floatingPointType(ctx, param);
    }
    referenceType(ctx, param) {
        storeComments(ctx, param);
        return super.referenceType(ctx, param);
    }
    classOrInterfaceType(ctx, param) {
        storeComments(ctx, param);
        return super.classOrInterfaceType(ctx, param);
    }
    classType(ctx, param) {
        storeComments(ctx, param);
        return super.classType(ctx, param);
    }
    interfaceType(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceType(ctx, param);
    }
    typeVariable(ctx, param) {
        storeComments(ctx, param);
        return super.typeVariable(ctx, param);
    }
    dims(ctx, param) {
        storeComments(ctx, param);
        return super.dims(ctx, param);
    }
    typeParameter(ctx, param) {
        storeComments(ctx, param);
        return super.typeParameter(ctx, param);
    }
    typeParameterModifier(ctx, param) {
        storeComments(ctx, param);
        return super.typeParameterModifier(ctx, param);
    }
    typeBound(ctx, param) {
        storeComments(ctx, param);
        return super.typeBound(ctx, param);
    }
    additionalBound(ctx, param) {
        storeComments(ctx, param);
        return super.additionalBound(ctx, param);
    }
    typeArguments(ctx, param) {
        storeComments(ctx, param);
        return super.typeArguments(ctx, param);
    }
    typeArgumentList(ctx, param) {
        storeComments(ctx, param);
        return super.typeArgumentList(ctx, param);
    }
    typeArgument(ctx, param) {
        storeComments(ctx, param);
        return super.typeArgument(ctx, param);
    }
    wildcard(ctx, param) {
        storeComments(ctx, param);
        return super.wildcard(ctx, param);
    }
    wildcardBounds(ctx, param) {
        storeComments(ctx, param);
        return super.wildcardBounds(ctx, param);
    }
    moduleName(ctx, param) {
        storeComments(ctx, param);
        return super.moduleName(ctx, param);
    }
    packageName(ctx, param) {
        storeComments(ctx, param);
        return super.packageName(ctx, param);
    }
    typeName(ctx, param) {
        storeComments(ctx, param);
        return super.typeName(ctx, param);
    }
    expressionName(ctx, param) {
        storeComments(ctx, param);
        return super.expressionName(ctx, param);
    }
    methodName(ctx, param) {
        storeComments(ctx, param);
        return super.methodName(ctx, param);
    }
    packageOrTypeName(ctx, param) {
        storeComments(ctx, param);
        return super.packageOrTypeName(ctx, param);
    }
    ambiguousName(ctx, param) {
        storeComments(ctx, param);
        return super.ambiguousName(ctx, param);
    }
    classDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.classDeclaration(ctx, param);
    }
    normalClassDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.normalClassDeclaration(ctx, param);
    }
    classModifier(ctx, param) {
        storeComments(ctx, param);
        return super.classModifier(ctx, param);
    }
    typeParameters(ctx, param) {
        storeComments(ctx, param);
        return super.typeParameters(ctx, param);
    }
    typeParameterList(ctx, param) {
        storeComments(ctx, param);
        return super.typeParameterList(ctx, param);
    }
    classExtends(ctx, param) {
        storeComments(ctx, param);
        return super.classExtends(ctx, param);
    }
    classImplements(ctx, param) {
        storeComments(ctx, param);
        return super.classImplements(ctx, param);
    }
    interfaceTypeList(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceTypeList(ctx, param);
    }
    classPermits(ctx, param) {
        storeComments(ctx, param);
        return super.classPermits(ctx, param);
    }
    classBody(ctx, param) {
        storeComments(ctx, param);
        return super.classBody(ctx, param);
    }
    classBodyDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.classBodyDeclaration(ctx, param);
    }
    classMemberDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.classMemberDeclaration(ctx, param);
    }
    fieldDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.fieldDeclaration(ctx, param);
    }
    fieldModifier(ctx, param) {
        storeComments(ctx, param);
        return super.fieldModifier(ctx, param);
    }
    variableDeclaratorList(ctx, param) {
        storeComments(ctx, param);
        return super.variableDeclaratorList(ctx, param);
    }
    variableDeclarator(ctx, param) {
        storeComments(ctx, param);
        return super.variableDeclarator(ctx, param);
    }
    variableDeclaratorId(ctx, param) {
        storeComments(ctx, param);
        return super.variableDeclaratorId(ctx, param);
    }
    variableInitializer(ctx, param) {
        storeComments(ctx, param);
        return super.variableInitializer(ctx, param);
    }
    unannType(ctx, param) {
        storeComments(ctx, param);
        return super.unannType(ctx, param);
    }
    unannPrimitiveTypeWithOptionalDimsSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.unannPrimitiveTypeWithOptionalDimsSuffix(ctx, param);
    }
    unannPrimitiveType(ctx, param) {
        storeComments(ctx, param);
        return super.unannPrimitiveType(ctx, param);
    }
    unannReferenceType(ctx, param) {
        storeComments(ctx, param);
        return super.unannReferenceType(ctx, param);
    }
    unannClassOrInterfaceType(ctx, param) {
        storeComments(ctx, param);
        return super.unannClassOrInterfaceType(ctx, param);
    }
    unannClassType(ctx, param) {
        storeComments(ctx, param);
        return super.unannClassType(ctx, param);
    }
    unannInterfaceType(ctx, param) {
        storeComments(ctx, param);
        return super.unannInterfaceType(ctx, param);
    }
    unannTypeVariable(ctx, param) {
        storeComments(ctx, param);
        return super.unannTypeVariable(ctx, param);
    }
    methodDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.methodDeclaration(ctx, param);
    }
    methodModifier(ctx, param) {
        storeComments(ctx, param);
        return super.methodModifier(ctx, param);
    }
    methodHeader(ctx, param) {
        storeComments(ctx, param);
        return super.methodHeader(ctx, param);
    }
    result(ctx, param) {
        storeComments(ctx, param);
        return super.result(ctx, param);
    }
    methodDeclarator(ctx, param) {
        storeComments(ctx, param);
        return super.methodDeclarator(ctx, param);
    }
    receiverParameter(ctx, param) {
        storeComments(ctx, param);
        return super.receiverParameter(ctx, param);
    }
    formalParameterList(ctx, param) {
        storeComments(ctx, param);
        return super.formalParameterList(ctx, param);
    }
    formalParameter(ctx, param) {
        storeComments(ctx, param);
        return super.formalParameter(ctx, param);
    }
    variableParaRegularParameter(ctx, param) {
        storeComments(ctx, param);
        return super.variableParaRegularParameter(ctx, param);
    }
    variableArityParameter(ctx, param) {
        storeComments(ctx, param);
        return super.variableArityParameter(ctx, param);
    }
    variableModifier(ctx, param) {
        storeComments(ctx, param);
        return super.variableModifier(ctx, param);
    }
    throws(ctx, param) {
        storeComments(ctx, param);
        return super.throws(ctx, param);
    }
    exceptionTypeList(ctx, param) {
        storeComments(ctx, param);
        return super.exceptionTypeList(ctx, param);
    }
    exceptionType(ctx, param) {
        storeComments(ctx, param);
        return super.exceptionType(ctx, param);
    }
    methodBody(ctx, param) {
        storeComments(ctx, param);
        return super.methodBody(ctx, param);
    }
    instanceInitializer(ctx, param) {
        storeComments(ctx, param);
        return super.instanceInitializer(ctx, param);
    }
    staticInitializer(ctx, param) {
        storeComments(ctx, param);
        return super.staticInitializer(ctx, param);
    }
    constructorDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.constructorDeclaration(ctx, param);
    }
    constructorModifier(ctx, param) {
        storeComments(ctx, param);
        return super.constructorModifier(ctx, param);
    }
    constructorDeclarator(ctx, param) {
        storeComments(ctx, param);
        return super.constructorDeclarator(ctx, param);
    }
    simpleTypeName(ctx, param) {
        storeComments(ctx, param);
        return super.simpleTypeName(ctx, param);
    }
    constructorBody(ctx, param) {
        storeComments(ctx, param);
        return super.constructorBody(ctx, param);
    }
    explicitConstructorInvocation(ctx, param) {
        storeComments(ctx, param);
        return super.explicitConstructorInvocation(ctx, param);
    }
    unqualifiedExplicitConstructorInvocation(ctx, param) {
        storeComments(ctx, param);
        return super.unqualifiedExplicitConstructorInvocation(ctx, param);
    }
    qualifiedExplicitConstructorInvocation(ctx, param) {
        storeComments(ctx, param);
        return super.qualifiedExplicitConstructorInvocation(ctx, param);
    }
    enumDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.enumDeclaration(ctx, param);
    }
    enumBody(ctx, param) {
        storeComments(ctx, param);
        return super.enumBody(ctx, param);
    }
    enumConstantList(ctx, param) {
        storeComments(ctx, param);
        return super.enumConstantList(ctx, param);
    }
    enumConstant(ctx, param) {
        storeComments(ctx, param);
        return super.enumConstant(ctx, param);
    }
    enumConstantModifier(ctx, param) {
        storeComments(ctx, param);
        return super.enumConstantModifier(ctx, param);
    }
    enumBodyDeclarations(ctx, param) {
        storeComments(ctx, param);
        return super.enumBodyDeclarations(ctx, param);
    }
    recordDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.recordDeclaration(ctx, param);
    }
    recordHeader(ctx, param) {
        storeComments(ctx, param);
        return super.recordHeader(ctx, param);
    }
    recordComponentList(ctx, param) {
        storeComments(ctx, param);
        return super.recordComponentList(ctx, param);
    }
    recordComponent(ctx, param) {
        storeComments(ctx, param);
        return super.recordComponent(ctx, param);
    }
    variableArityRecordComponent(ctx, param) {
        storeComments(ctx, param);
        return super.variableArityRecordComponent(ctx, param);
    }
    recordComponentModifier(ctx, param) {
        storeComments(ctx, param);
        return super.recordComponentModifier(ctx, param);
    }
    recordBody(ctx, param) {
        storeComments(ctx, param);
        return super.recordBody(ctx, param);
    }
    recordBodyDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.recordBodyDeclaration(ctx, param);
    }
    compactConstructorDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.compactConstructorDeclaration(ctx, param);
    }
    isDims(ctx, param) {
        storeComments(ctx, param);
        return super.isDims(ctx, param);
    }
    compilationUnit(ctx, param) {
        storeComments(ctx, param);
        return super.compilationUnit(ctx, param);
    }
    ordinaryCompilationUnit(ctx, param) {
        storeComments(ctx, param);
        return super.ordinaryCompilationUnit(ctx, param);
    }
    modularCompilationUnit(ctx, param) {
        storeComments(ctx, param);
        return super.modularCompilationUnit(ctx, param);
    }
    packageDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.packageDeclaration(ctx, param);
    }
    packageModifier(ctx, param) {
        storeComments(ctx, param);
        return super.packageModifier(ctx, param);
    }
    importDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.importDeclaration(ctx, param);
    }
    typeDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.typeDeclaration(ctx, param);
    }
    moduleDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.moduleDeclaration(ctx, param);
    }
    moduleDirective(ctx, param) {
        storeComments(ctx, param);
        return super.moduleDirective(ctx, param);
    }
    requiresModuleDirective(ctx, param) {
        storeComments(ctx, param);
        return super.requiresModuleDirective(ctx, param);
    }
    exportsModuleDirective(ctx, param) {
        storeComments(ctx, param);
        return super.exportsModuleDirective(ctx, param);
    }
    opensModuleDirective(ctx, param) {
        storeComments(ctx, param);
        return super.opensModuleDirective(ctx, param);
    }
    usesModuleDirective(ctx, param) {
        storeComments(ctx, param);
        return super.usesModuleDirective(ctx, param);
    }
    providesModuleDirective(ctx, param) {
        storeComments(ctx, param);
        return super.providesModuleDirective(ctx, param);
    }
    requiresModifier(ctx, param) {
        storeComments(ctx, param);
        return super.requiresModifier(ctx, param);
    }
    interfaceDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceDeclaration(ctx, param);
    }
    normalInterfaceDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.normalInterfaceDeclaration(ctx, param);
    }
    interfaceModifier(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceModifier(ctx, param);
    }
    interfaceExtends(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceExtends(ctx, param);
    }
    interfacePermits(ctx, param) {
        storeComments(ctx, param);
        return super.interfacePermits(ctx, param);
    }
    interfaceBody(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceBody(ctx, param);
    }
    interfaceMemberDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceMemberDeclaration(ctx, param);
    }
    constantDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.constantDeclaration(ctx, param);
    }
    constantModifier(ctx, param) {
        storeComments(ctx, param);
        return super.constantModifier(ctx, param);
    }
    interfaceMethodDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceMethodDeclaration(ctx, param);
    }
    interfaceMethodModifier(ctx, param) {
        storeComments(ctx, param);
        return super.interfaceMethodModifier(ctx, param);
    }
    annotationInterfaceDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.annotationInterfaceDeclaration(ctx, param);
    }
    annotationInterfaceBody(ctx, param) {
        storeComments(ctx, param);
        return super.annotationInterfaceBody(ctx, param);
    }
    annotationInterfaceMemberDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.annotationInterfaceMemberDeclaration(ctx, param);
    }
    annotationInterfaceElementDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.annotationInterfaceElementDeclaration(ctx, param);
    }
    annotationInterfaceElementModifier(ctx, param) {
        storeComments(ctx, param);
        return super.annotationInterfaceElementModifier(ctx, param);
    }
    defaultValue(ctx, param) {
        storeComments(ctx, param);
        return super.defaultValue(ctx, param);
    }
    annotation(ctx, param) {
        storeComments(ctx, param);
        return super.annotation(ctx, param);
    }
    elementValuePairList(ctx, param) {
        storeComments(ctx, param);
        return super.elementValuePairList(ctx, param);
    }
    elementValuePair(ctx, param) {
        storeComments(ctx, param);
        return super.elementValuePair(ctx, param);
    }
    elementValue(ctx, param) {
        storeComments(ctx, param);
        return super.elementValue(ctx, param);
    }
    elementValueArrayInitializer(ctx, param) {
        storeComments(ctx, param);
        return super.elementValueArrayInitializer(ctx, param);
    }
    elementValueList(ctx, param) {
        storeComments(ctx, param);
        return super.elementValueList(ctx, param);
    }
    arrayInitializer(ctx, param) {
        storeComments(ctx, param);
        return super.arrayInitializer(ctx, param);
    }
    variableInitializerList(ctx, param) {
        storeComments(ctx, param);
        return super.variableInitializerList(ctx, param);
    }
    block(ctx, param) {
        storeComments(ctx, param);
        return super.block(ctx, param);
    }
    blockStatements(ctx, param) {
        storeComments(ctx, param);
        return super.blockStatements(ctx, param);
    }
    blockStatement(ctx, param) {
        storeComments(ctx, param);
        return super.blockStatement(ctx, param);
    }
    localVariableDeclarationStatement(ctx, param) {
        storeComments(ctx, param);
        return super.localVariableDeclarationStatement(ctx, param);
    }
    localVariableDeclaration(ctx, param) {
        storeComments(ctx, param);
        return super.localVariableDeclaration(ctx, param);
    }
    localVariableType(ctx, param) {
        storeComments(ctx, param);
        return super.localVariableType(ctx, param);
    }
    statement(ctx, param) {
        storeComments(ctx, param);
        return super.statement(ctx, param);
    }
    statementWithoutTrailingSubstatement(ctx, param) {
        storeComments(ctx, param);
        return super.statementWithoutTrailingSubstatement(ctx, param);
    }
    emptyStatement(ctx, param) {
        storeComments(ctx, param);
        return super.emptyStatement(ctx, param);
    }
    labeledStatement(ctx, param) {
        storeComments(ctx, param);
        return super.labeledStatement(ctx, param);
    }
    expressionStatement(ctx, param) {
        storeComments(ctx, param);
        return super.expressionStatement(ctx, param);
    }
    statementExpression(ctx, param) {
        storeComments(ctx, param);
        return super.statementExpression(ctx, param);
    }
    ifStatement(ctx, param) {
        storeComments(ctx, param);
        return super.ifStatement(ctx, param);
    }
    assertStatement(ctx, param) {
        storeComments(ctx, param);
        return super.assertStatement(ctx, param);
    }
    switchStatement(ctx, param) {
        storeComments(ctx, param);
        return super.switchStatement(ctx, param);
    }
    switchBlock(ctx, param) {
        storeComments(ctx, param);
        return super.switchBlock(ctx, param);
    }
    switchBlockStatementGroup(ctx, param) {
        storeComments(ctx, param);
        return super.switchBlockStatementGroup(ctx, param);
    }
    switchLabel(ctx, param) {
        storeComments(ctx, param);
        return super.switchLabel(ctx, param);
    }
    switchRule(ctx, param) {
        storeComments(ctx, param);
        return super.switchRule(ctx, param);
    }
    caseConstant(ctx, param) {
        storeComments(ctx, param);
        return super.caseConstant(ctx, param);
    }
    casePattern(ctx, param) {
        storeComments(ctx, param);
        return super.casePattern(ctx, param);
    }
    whileStatement(ctx, param) {
        storeComments(ctx, param);
        return super.whileStatement(ctx, param);
    }
    doStatement(ctx, param) {
        storeComments(ctx, param);
        return super.doStatement(ctx, param);
    }
    forStatement(ctx, param) {
        storeComments(ctx, param);
        return super.forStatement(ctx, param);
    }
    basicForStatement(ctx, param) {
        storeComments(ctx, param);
        return super.basicForStatement(ctx, param);
    }
    forInit(ctx, param) {
        storeComments(ctx, param);
        return super.forInit(ctx, param);
    }
    forUpdate(ctx, param) {
        storeComments(ctx, param);
        return super.forUpdate(ctx, param);
    }
    statementExpressionList(ctx, param) {
        storeComments(ctx, param);
        return super.statementExpressionList(ctx, param);
    }
    enhancedForStatement(ctx, param) {
        storeComments(ctx, param);
        return super.enhancedForStatement(ctx, param);
    }
    breakStatement(ctx, param) {
        storeComments(ctx, param);
        return super.breakStatement(ctx, param);
    }
    continueStatement(ctx, param) {
        storeComments(ctx, param);
        return super.continueStatement(ctx, param);
    }
    returnStatement(ctx, param) {
        storeComments(ctx, param);
        return super.returnStatement(ctx, param);
    }
    throwStatement(ctx, param) {
        storeComments(ctx, param);
        return super.throwStatement(ctx, param);
    }
    synchronizedStatement(ctx, param) {
        storeComments(ctx, param);
        return super.synchronizedStatement(ctx, param);
    }
    tryStatement(ctx, param) {
        storeComments(ctx, param);
        return super.tryStatement(ctx, param);
    }
    catches(ctx, param) {
        storeComments(ctx, param);
        return super.catches(ctx, param);
    }
    catchClause(ctx, param) {
        storeComments(ctx, param);
        return super.catchClause(ctx, param);
    }
    catchFormalParameter(ctx, param) {
        storeComments(ctx, param);
        return super.catchFormalParameter(ctx, param);
    }
    catchType(ctx, param) {
        storeComments(ctx, param);
        return super.catchType(ctx, param);
    }
    finally(ctx, param) {
        storeComments(ctx, param);
        return super.finally(ctx, param);
    }
    tryWithResourcesStatement(ctx, param) {
        storeComments(ctx, param);
        return super.tryWithResourcesStatement(ctx, param);
    }
    resourceSpecification(ctx, param) {
        storeComments(ctx, param);
        return super.resourceSpecification(ctx, param);
    }
    resourceList(ctx, param) {
        storeComments(ctx, param);
        return super.resourceList(ctx, param);
    }
    resource(ctx, param) {
        storeComments(ctx, param);
        return super.resource(ctx, param);
    }
    yieldStatement(ctx, param) {
        storeComments(ctx, param);
        return super.yieldStatement(ctx, param);
    }
    variableAccess(ctx, param) {
        storeComments(ctx, param);
        return super.variableAccess(ctx, param);
    }
    expression(ctx, param) {
        storeComments(ctx, param);
        return super.expression(ctx, param);
    }
    lambdaExpression(ctx, param) {
        storeComments(ctx, param);
        return super.lambdaExpression(ctx, param);
    }
    lambdaParameters(ctx, param) {
        storeComments(ctx, param);
        return super.lambdaParameters(ctx, param);
    }
    lambdaParametersWithBraces(ctx, param) {
        storeComments(ctx, param);
        return super.lambdaParametersWithBraces(ctx, param);
    }
    lambdaParameterList(ctx, param) {
        storeComments(ctx, param);
        return super.lambdaParameterList(ctx, param);
    }
    conciseLambdaParameterList(ctx, param) {
        storeComments(ctx, param);
        return super.conciseLambdaParameterList(ctx, param);
    }
    normalLambdaParameterList(ctx, param) {
        storeComments(ctx, param);
        return super.normalLambdaParameterList(ctx, param);
    }
    normalLambdaParameter(ctx, param) {
        storeComments(ctx, param);
        return super.normalLambdaParameter(ctx, param);
    }
    regularLambdaParameter(ctx, param) {
        storeComments(ctx, param);
        return super.regularLambdaParameter(ctx, param);
    }
    lambdaParameterType(ctx, param) {
        storeComments(ctx, param);
        return super.lambdaParameterType(ctx, param);
    }
    conciseLambdaParameter(ctx, param) {
        storeComments(ctx, param);
        return super.conciseLambdaParameter(ctx, param);
    }
    lambdaBody(ctx, param) {
        storeComments(ctx, param);
        return super.lambdaBody(ctx, param);
    }
    conditionalExpression(ctx, param) {
        storeComments(ctx, param);
        return super.conditionalExpression(ctx, param);
    }
    binaryExpression(ctx, param) {
        storeComments(ctx, param);
        return super.binaryExpression(ctx, param);
    }
    unaryExpression(ctx, param) {
        storeComments(ctx, param);
        return super.unaryExpression(ctx, param);
    }
    unaryExpressionNotPlusMinus(ctx, param) {
        storeComments(ctx, param);
        return super.unaryExpressionNotPlusMinus(ctx, param);
    }
    primary(ctx, param) {
        storeComments(ctx, param);
        return super.primary(ctx, param);
    }
    primaryPrefix(ctx, param) {
        storeComments(ctx, param);
        return super.primaryPrefix(ctx, param);
    }
    primarySuffix(ctx, param) {
        storeComments(ctx, param);
        return super.primarySuffix(ctx, param);
    }
    fqnOrRefType(ctx, param) {
        storeComments(ctx, param);
        return super.fqnOrRefType(ctx, param);
    }
    fqnOrRefTypePartRest(ctx, param) {
        storeComments(ctx, param);
        return super.fqnOrRefTypePartRest(ctx, param);
    }
    fqnOrRefTypePartCommon(ctx, param) {
        storeComments(ctx, param);
        return super.fqnOrRefTypePartCommon(ctx, param);
    }
    fqnOrRefTypePartFirst(ctx, param) {
        storeComments(ctx, param);
        return super.fqnOrRefTypePartFirst(ctx, param);
    }
    parenthesisExpression(ctx, param) {
        storeComments(ctx, param);
        return super.parenthesisExpression(ctx, param);
    }
    castExpression(ctx, param) {
        storeComments(ctx, param);
        return super.castExpression(ctx, param);
    }
    primitiveCastExpression(ctx, param) {
        storeComments(ctx, param);
        return super.primitiveCastExpression(ctx, param);
    }
    referenceTypeCastExpression(ctx, param) {
        storeComments(ctx, param);
        return super.referenceTypeCastExpression(ctx, param);
    }
    newExpression(ctx, param) {
        storeComments(ctx, param);
        return super.newExpression(ctx, param);
    }
    unqualifiedClassInstanceCreationExpression(ctx, param) {
        storeComments(ctx, param);
        return super.unqualifiedClassInstanceCreationExpression(ctx, param);
    }
    classOrInterfaceTypeToInstantiate(ctx, param) {
        storeComments(ctx, param);
        return super.classOrInterfaceTypeToInstantiate(ctx, param);
    }
    typeArgumentsOrDiamond(ctx, param) {
        storeComments(ctx, param);
        return super.typeArgumentsOrDiamond(ctx, param);
    }
    diamond(ctx, param) {
        storeComments(ctx, param);
        return super.diamond(ctx, param);
    }
    methodInvocationSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.methodInvocationSuffix(ctx, param);
    }
    argumentList(ctx, param) {
        storeComments(ctx, param);
        return super.argumentList(ctx, param);
    }
    arrayCreationExpression(ctx, param) {
        storeComments(ctx, param);
        return super.arrayCreationExpression(ctx, param);
    }
    arrayCreationExpressionWithoutInitializerSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.arrayCreationExpressionWithoutInitializerSuffix(ctx, param);
    }
    arrayCreationWithInitializerSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.arrayCreationWithInitializerSuffix(ctx, param);
    }
    dimExprs(ctx, param) {
        storeComments(ctx, param);
        return super.dimExprs(ctx, param);
    }
    dimExpr(ctx, param) {
        storeComments(ctx, param);
        return super.dimExpr(ctx, param);
    }
    classLiteralSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.classLiteralSuffix(ctx, param);
    }
    arrayAccessSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.arrayAccessSuffix(ctx, param);
    }
    methodReferenceSuffix(ctx, param) {
        storeComments(ctx, param);
        return super.methodReferenceSuffix(ctx, param);
    }
    templateArgument(ctx, param) {
        storeComments(ctx, param);
        return super.templateArgument(ctx, param);
    }
    template(ctx, param) {
        storeComments(ctx, param);
        return super.template(ctx, param);
    }
    stringTemplate(ctx, param) {
        storeComments(ctx, param);
        return super.stringTemplate(ctx, param);
    }
    textBlockTemplate(ctx, param) {
        storeComments(ctx, param);
        return super.textBlockTemplate(ctx, param);
    }
    embeddedExpression(ctx, param) {
        storeComments(ctx, param);
        return super.embeddedExpression(ctx, param);
    }
    pattern(ctx, param) {
        storeComments(ctx, param);
        return super.pattern(ctx, param);
    }
    typePattern(ctx, param) {
        storeComments(ctx, param);
        return super.typePattern(ctx, param);
    }
    recordPattern(ctx, param) {
        storeComments(ctx, param);
        return super.recordPattern(ctx, param);
    }
    componentPatternList(ctx, param) {
        storeComments(ctx, param);
        return super.componentPatternList(ctx, param);
    }
    componentPattern(ctx, param) {
        storeComments(ctx, param);
        return super.componentPattern(ctx, param);
    }
    matchAllPattern(ctx, param) {
        storeComments(ctx, param);
        return super.matchAllPattern(ctx, param);
    }
    guard(ctx, param) {
        storeComments(ctx, param);
        return super.guard(ctx, param);
    }
    isRefTypeInMethodRef(ctx, param) {
        storeComments(ctx, param);
        return super.isRefTypeInMethodRef(ctx, param);
    }
}
